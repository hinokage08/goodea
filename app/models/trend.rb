class Trend < ApplicationRecord
  Query = Goodea::Client.parse <<-GRAPHQL
  query ($title: [String!]) {
    searchWorks(
      titles: $title,
      orderBy: { field: SEASON, direction: DESC },
    ) {
      edges {
        node {
          title
          officialSiteUrl
          image {
            recommendedImageUrl
          }        
          }
        }
      }
    }



  GRAPHQL

  def self.query(variables = {})
    response = Goodea::Client.query(Query, variables: variables)

    if response.errors.any?
        raise QueryError.new(response.errors[:data].join(", "))
    else
        response.data
        data = response.data
    end
  end

  def self.twitter
    twitter = Goodea::TwClient
  end

  def self.trend_search
    twitter.trends(23424856).first(20).map(&:name)
  end

  def self.related_word_search(trend)
      query = trend + " filter:hashtags"
      search_results= twitter.search(query, lang:"ja", count: 500, result_type: "mixed", tweet_mode: "extended").take(500)
      hashtag = []
      search_results.each do |result|
        if result.attrs[:entities][:hashtags]
          result.attrs[:entities][:hashtags].each do |n|
            hashtag << n[:text]
          end
        end
      end
      unless hashtag.blank?
        hashtag_count = Hash.new(0)
        hashtag.each do |elem|
          hashtag_count[elem] += 1
        end
        if max_hashtag = hashtag_count.max_by(2) {|tag, count| count}
          if '#' + max_hashtag[0][0] == trend && max_hashtag[1]
            return max_hashtag[1][0]
          else
            return max_hashtag[0][0]
          end
        end
      end
  end

  def self.trend_google_search(related_word)
    searcher = Google::Apis::CustomsearchV1::CustomsearchService.new
    searcher.key = ENV['GOOGLE_CUSTOMSEARCH_API_KEY']
    items = []
    works_name = []
    query = related_word + "_正式名称_wikipedia"
    results = searcher.list_cses(q: query , cx: ENV['GOOGLE_CSE_ID'], lr: "lang_ja")
    items = results.items.map(&:formatted_url)
    items.each_with_index do |item, idx|
      if item.index("wikipedia")
        unless item == "https://ja.wikipedia.org/wiki/ウィキペディア"
          return item.delete("https://ja.wikipedia.org/wiki/").strip
        end
      elsif idx == items.size - 1
        return nil
      end
    end
  end

  def self.anict_search_title(work)
    edges = query(title: work).searchWorks.edges
    edges.each_with_index do |edge, idx|
      if edge.node.title
        if idx == edges.size - 1
          return edge.node.title
        end
      else
        return "unknown"
      end
    end
  end
  def self.anict_search_image(work)
    edges = query(title: work).searchWorks.edges
    edges.each_with_index do |edge, idx|
      if edge.node.image
        if edge.node.image.recommendedImageUrl.present?
          unless edge.node.image.recommendedImageUrl.index("https://twitter.com")
            return edge.node.image.recommendedImageUrl
            break
          else
            if idx == edges.size - 1
              return "noimage.png"
            end
          end
        elsif idx == edges.size - 1
          return "noimage.png"
        end
      elsif idx == edges.size - 1
        return "noimage.png"
      end
    end
  end
end

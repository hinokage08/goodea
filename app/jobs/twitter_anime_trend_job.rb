class TwitterAnimeTrendJob < ApplicationJob
  queue_as :default

  def perform
    require 'wikipedia'
    require 'google/apis/customsearch_v1'

  
    Trend.trend_search.each.with_index(1) do |trend, idx|
      related_word = Trend.related_word_search(trend)
      work = Trend.trend_google_search(related_word)
      anime_title = Trend.anict_search_title(work)
      anime_img = Trend.anict_search_image(work)
      anime_img = anime_img.delete("[]") if anime_img.empty?
      unless @trend = Trend.find_by(id:idx)
        Trend.create(trend_word: trend, work: work, title: anime_title, anime_url: anime_img)
      else
        @trend.update(trend_word: trend, title: anime_title, anime_url: anime_img)
      end
    end
  end
end

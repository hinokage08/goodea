class TwitterAnimeTrendJob < ApplicationJob
  queue_as :default

  def perform
    require 'wikipedia'
    require 'google/apis/customsearch_v1'

  
    Trend.trend_search.each.with_index(1) do |trend, idx|
      related_word = Trend.related_word_search(trend)
      works_name = Trend.trend_google_search(related_word)
      anime_img = Trend.anict_search(works_name)
      anime_img = anime_img.delete("[]") if anime_img.empty?
      unless @trend = Trend.find_by(id:idx)
        Trend.create(trend_word: trend, title: works_name, anime_url: anime_img)
      else
        @trend.update(trend_word: trend, title: works_name, anime_url: anime_img)
      end
    end
  end
end

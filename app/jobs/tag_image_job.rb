class TagImageJob < ApplicationJob
  queue_as :default

  def perform
    ActsAsTaggableOn::Tag.most_used.first(5).each do |tag|
      tag_name = tag.name
      if tag.image == nil
        if @tag = ActsAsTaggableOn::Tag.find_by(name: tag_name)
          anime_img = Trend.anict_search_image(tag_name)
          anime_img = anime_img.delete("[]") if anime_img.empty?
          tag.update(image: anime_img)
        end
      end
    end
  end
end

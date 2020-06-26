class AddClolumnTagsImageToIdeas < ActiveRecord::Migration[5.2]
  def change
    add_column :ideas, :tag_image, :text
  end
end

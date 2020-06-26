class RemoveClolumnTagsImageFromIdeas < ActiveRecord::Migration[5.2]
  def change
    remove_column :ideas, :tag_image, :text
  end
end

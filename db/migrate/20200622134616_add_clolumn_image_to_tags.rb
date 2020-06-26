class AddClolumnImageToTags < ActiveRecord::Migration[5.2]
  def change
    add_column :tags, :image, :text
  end
end

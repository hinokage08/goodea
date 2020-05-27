class AddAnimeurlToIdeas < ActiveRecord::Migration[5.2]
  def change
    add_column :ideas, :anime_url, :text
  end
end
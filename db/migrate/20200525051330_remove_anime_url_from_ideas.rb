class RemoveAnimeUrlFromIdeas < ActiveRecord::Migration[5.2]
  def change
    remove_column :ideas, :anime_url, :text
  end
end

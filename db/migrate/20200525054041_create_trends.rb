class CreateTrends < ActiveRecord::Migration[5.2]
  def change
    create_table :trends do |t|
      t.string "trend_word"
      t.string "title"
      t.string "anime_url"

      t.timestamps
    end
  end
end

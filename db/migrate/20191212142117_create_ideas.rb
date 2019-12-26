class CreateIdeas < ActiveRecord::Migration[5.2]
  def change
    create_table :ideas do |t|
      t.string "title", null: false
      t.string "content", null: false
      t.text "image"
      t.timestamps
    end
  end
end

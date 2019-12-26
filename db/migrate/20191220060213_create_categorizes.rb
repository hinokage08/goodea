class CreateCategorizes < ActiveRecord::Migration[5.2]
  def change
    create_table :categorizes do |t|
      t.references :category, foreign_key: true
      t.references :idea, foreign_key: true
      t.timestamps
    end
  end
end

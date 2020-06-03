class AddAnimetitleToTrends < ActiveRecord::Migration[5.2]
  def change
    add_column :trends, :work, :string
  end
end

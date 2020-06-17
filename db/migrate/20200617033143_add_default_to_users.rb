class AddDefaultToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :profile, "よろしくお願いします"
  end
end

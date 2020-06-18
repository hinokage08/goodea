class AddProfileDefaultToUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :profile_image, "noimage.png"
  end
end

class FavoritesController < ApplicationController
    before_action :authenticate_user!
    def create
        favorite = current_user.favorites.create(idea_id: params[:idea_id])
        redirect_to idea_path(favorite.idea_id), notice: "#{favorite.idea.user.name}さんのアイデアをお気に入りしました"
    end
    
    def destroy
      if params[:deletes].present?
        favorites = current_user.favorites.where(idea_id: params[:deletes]).destroy_all
        favorites = favorites.map do |favorite|
          favorite.idea.user.name
        end
        redirect_to favorite_user_path(current_user.id), notice: "#アイデアのお気に入りを解除しました"
      else
        favorite = current_user.favorites.find_by(id: params[:id]).destroy
        redirect_to idea_path(favorite.idea_id), notice: "アイデアのお気に入りを解除しました"
      end
    end
end

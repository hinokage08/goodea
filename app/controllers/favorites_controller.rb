class FavoritesController < ApplicationController
    before_action :authenticate_user!
    def create
        favorite = current_user.favorites.create(idea_id: params[:idea_id])
        redirect_to ideas_url, notice: "#{favorite.idea.user.name}さんのアイデアをお気に入り登録しました"
    end

    def destroy
        favorite = current_user.favorites.find_by(id: params[:id]).destroy
        redirect_to ideas_url, notice: "#{favorite.idea.user.name}さんのアイデアをお気に入り解除しました"
    end
end

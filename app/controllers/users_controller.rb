class UsersController < ApplicationController
  before_action :set_user, only:[:show, :edit, :update]
  before_action :authenticate_user!, only:[:edit, :update, :destory]

  def show
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to user_path(@user.id)
    end
  end

  def following
    @user  = User.find(params[:id])
    @users = @user.following
    render 'show_follow'
  end

  def followers
    @user  = User.find(params[:id])
    @users = @user.followers
    render 'show_follower'
  end

  private

  def set_user
    @user = User.find(params[:id])
  end 

  def user_params
    params.require(:user).permit(:name, :image, :profile, :profile_image_cache, :email, :profile_image)
  end
end

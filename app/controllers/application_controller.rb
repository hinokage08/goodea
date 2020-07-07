class ApplicationController < ActionController::Base
    include ActionController::Cookies
    protect_from_forgery with: :exception
    # deviseコントローラーにストロングパラメータを追加する          
    before_action :configure_permitted_parameters, if: :devise_controller?
    before_action :set_search
    before_action :set_category

    protected
    def after_sign_in_path_for(resource)
        user_path(id: current_user.id)
    end

    def configure_permitted_parameters
        # サインアップ時にnameのストロングパラメータを追加
        devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
        # アカウント編集の時にnameとprofileのストロングパラメータを追加
        devise_parameter_sanitizer.permit(:account_update, keys: [:name, :email])
    end

    def set_search
        @search = Idea.includes(:tags, :user).ransack(params[:q])
        @search_ideas = @search.result.page(params[:page]).per(20)
    end

    def set_category
      @categories = Category.all
    end
end

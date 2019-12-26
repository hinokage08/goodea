class IdeasController < ApplicationController
    before_action :set_idea, only:[:show, :edit, :update, :destroy]
    before_action :authenticate_user!, only:[:new, :create, :edit, :upadate, :destory, :my_idea]
    def index
        @ideas = Idea.all
    end
    
    def new
        @idea = Idea.new
        @all_tag_list = ActsAsTaggableOn::Tag.all.pluck(:name)
    end

    def create
        @idea = current_user.ideas.build(idea_params)
        if @idea.save
            redirect_to ideas_path
        else
            render :new
        end
    end

    def show
        @comment = Comment.new
        @comments = @idea.comments
    end

    def edit
    end

    def update
        if @idea.update(idea_params)
            redirect_to ideas_path
        end
    end

    def destroy
        @idea.destroy
        redirect_to ideas_path, notice:"投稿を削除しました。"
    end

    def top
        @ideas = Idea.all
        @category = Category.all
        @all_ranks = Idea.find(Favorite.group(:idea_id).order('count(idea_id) desc').limit(3).pluck(:idea_id))
    end

    def my_idea
        @ideas = current_user.ideas.all
    end

    private

    def set_idea
        @idea = Idea.find(params[:id])
    end 
    
    def idea_params
        params.require(:idea).permit(:title, :content, :image, :image_cache, :tag_list, category_ids: [])
    end
end

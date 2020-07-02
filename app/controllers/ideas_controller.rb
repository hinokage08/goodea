class IdeasController < ApplicationController
    before_action :set_idea, only:[:show, :edit, :update, :destroy]
    before_action :authenticate_user!, only:[:new, :create, :edit, :upadate, :destory, :my_idea]
    before_action :check_user, only: [:edit, :update, :delete]
    before_action :set_ranking_data, only: [:top]
  
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
        @comments = @idea.comments
        @comment = @idea.comments.build
        REDIS.zincrby "ideas/daily/#{Date.today.to_s}", 1, @idea.id
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
        @ideas = Idea.all.order(id: "DESC").first(9)
        @category = Category.all
        @all_ranks = Idea.find(Favorite.group(:idea_id).order('count(idea_id) desc').limit(5).pluck(:idea_id))
        @trends = Trend.all
        @tags = ActsAsTaggableOn::Tag.most_used.first(5)
    end
    
    def my_idea
        @ideas = current_user.ideas.all
    end

    private

    def set_idea
        @idea = Idea.find(params[:id])
    end 

    def set_ranking_data
      ids = REDIS.zrevrangebyscore "ideas/daily/#{Date.today.to_s}", "+inf", 0, limit: [0, 5]
      @ranking_ideas = ids.map{ |id| Idea.find(id) }
      if @ranking_ideas.count < 5
        adding_ideas = Idea.order(updated_at: :DESC).where.not(id: ids).limit(5 - @ranking_ideas.count)
        @ranking_ideas.concat(adding_ideas)
      end
    end
    
    def idea_params
        params.require(:idea).permit(:title, :content, :image, :image_cache, :tag_list, category_ids: [])
    end

    def check_user
        if @idea.user_id != current_user.id
            redirect_to top_ideas_path,notice:"権限がありません"
        end
    end
end

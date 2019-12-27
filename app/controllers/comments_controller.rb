class CommentsController < ApplicationController
    before_action :set_idea, only: [:create, :edit, :update, :destroy]
  
    def create
      @comment = @idea.comments.build(comment_params)
      @comment.user_id = current_user.id
      respond_to do |format|
        if @comment.save
          flash.now[:notice] = 'コメントが投稿されました'
          format.js { render :index }
        else
          flash.now[:notice] = 'コメントの投稿に失敗しました'
          format.js { render :error }
        end
      end
    end
  
    def edit
      @comment = @idea.comments.find(params[:id])
      @comment.user_id = current_user.id
      respond_to do |format|
        flash.now[:notice] = 'コメントの編集中'
        format.js { render :edit }
      end
    end
  
    def update
      @comment = @idea.comments.find(params[:id])
      @comment.user_id = current_user.id
        respond_to do |format|
          if @comment.update(comment_params)
            flash.now[:notice] = 'コメントが編集されました'
            format.js { render :index }
          else
            flash.now[:notice] = 'コメントの編集に失敗しました'
            format.js { render :edit_error }
          end
        end
    end
  
    def destroy
      @comment = Comment.find(params[:id])
        @comment.destroy
        respond_to do |format|
          flash.now[:notice] = 'コメントが削除されました'
          format.js { render :index }
        end
    end
  
    private
  
    def comment_params
      params.require(:comment).permit(:content, :idea_id, :user_id)
    end
  
    def set_idea
      @idea = Idea.find(params[:idea_id])
    end
  end
class CommentsController < ApplicationController
    before_action :authenticate_user!
    def create
        @idea = Idea.find(params[:idea_id])
        @comment = @idea.comments.build(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :index
        end
    end

    def edit
        @comment = Comment.find(params[:id])
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params)
            render :index, notice: "コメントを編集しました"
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render :index
        end
    end

    private

    def comment_params
        params.require(:comment).permit(:content, :idea_id, :user_id)
    end
end

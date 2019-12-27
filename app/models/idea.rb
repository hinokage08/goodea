class Idea < ApplicationRecord
    mount_uploader :image, ImageUploader
    belongs_to :user
    has_many :favorites, dependent: :destroy
    has_many :favorite_users, through: :favorites, source: :user
    has_many :comments, dependent: :destroy
    has_many :categorizes,dependent: :destroy
    has_many :categories, through: :categorizes, source: :category

    validates :title, presence: true, length: { maximum:20 }
    validates :content, presence: true
    validate  :tag_list_tag_validation
    def tag_list_tag_validation
        tag_validation = tag_list 
        tag_validation.split(",")
        if tag_validation.length < 1
            errors.add(:tag_list, "タグを入力してください")
        end
        if tag_validation.length >5
            errors.add(:tag_list, "タグは５個までです")
        end
    end




    acts_as_taggable_on :labels
    acts_as_taggable
end

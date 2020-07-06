class User < ApplicationRecord
  mount_uploader :profile_image, ImageUploader
  has_many :ideas
  has_many :favorites, dependent: :destroy
  has_many :favorite_ideas, through: :favorites, source: :idea
  has_many :active_relationships, foreign_key: 'follower_id', class_name: 'Relationship', dependent: :destroy
  has_many :passive_relationships, foreign_key: 'followed_id', class_name: 'Relationship', dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :followers, through: :passive_relationships, source: :follower
  has_many :comments
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
        :recoverable, :rememberable, :validatable, :omniauthable
  validates :email, presence: true, length: { maximum: 255 },
            format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i }
  validates :name,  presence: true, length: { maximum: 30 }
  validates :password, presence: true, length: { minimum: 6 }, on: :create
  before_validation { email.downcase! }
  
          def self.find_for_oauth(auth)
          user = User.where(uid: auth.uid, provider: auth.provider).first
      
          unless user
            user = User.create(
              uid:      auth.uid,
              provider: auth.provider,
              email:    User.dummy_email(auth),
              password: Devise.friendly_token[0, 20],
              remote_profile_image_url: auth.info.image,
              name: auth.info.name,
              nickname: auth.info.nickname,
              location: auth.info.location
            )
          end
      
          user
        end

        def follow!(other_user)
          active_relationships.create!(followed_id: other_user.id)
        end
        
        def following?(other_user)
          active_relationships.find_by(followed_id: other_user.id)
        end
        
        def unfollow!(other_user)
          active_relationships.find_by(followed_id: other_user.id).destroy
        end

        def password_required?
          super && provider.blank?
        end

        def self.guest
          find_or_create_by(name: 'guest', email: 'guest@example.com') do |user|
            user.password = SecureRandom.urlsafe_base64
          end
        end
      
        private
      
        def self.dummy_email(auth)
          "#{auth.uid}-#{auth.provider}@example.com"
        end
      end

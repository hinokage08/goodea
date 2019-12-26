class Category < ApplicationRecord
    has_many :categorizes
    has_many :ideas, through: :categorizes
end

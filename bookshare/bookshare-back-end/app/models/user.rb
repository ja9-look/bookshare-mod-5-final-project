class User < ApplicationRecord
    has_many :reviews
    has_one :bookshelf
    has_many :books, through: :bookshelf
    has_many :books, through: :review
    has_secure_password
    validates :username, uniqueness: { case_sensitive: false }

    
end

class Book < ApplicationRecord
    has_many :reviews
    has_many :book_bookshelves
    has_many :bookshelves, through: :book_bookshelves
end

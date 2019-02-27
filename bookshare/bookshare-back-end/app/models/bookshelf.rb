class Bookshelf < ApplicationRecord
    belongs_to :user
    has_many :book_bookshelves
    has_many :books, through: :book_bookshelves

    scope :read_books, -> { where(read: true)}
    scope :bought_books, -> { where(bought: true)}

end

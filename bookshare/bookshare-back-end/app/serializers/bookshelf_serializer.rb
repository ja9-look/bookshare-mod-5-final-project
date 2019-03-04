class BookshelfSerializer < ActiveModel::Serializer
  has_many :book_bookshelves
  
  # def book_bookshelves
  #   self.object.book_bookshelves if self.object.book_bookshelves
  # end
  class BookBookshelfSerializer < ActiveModel::Serializer
    attributes :read, :bought, :favourite, :isbn

    def isbn
      self.object.book.isbn
    end
  end

end

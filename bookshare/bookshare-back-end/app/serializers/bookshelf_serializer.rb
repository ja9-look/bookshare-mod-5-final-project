class BookshelfSerializer < ActiveModel::Serializer
  attributes :user_id, :books, :read, :bought

end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :first_name, :last_name, :bookshelf

  def bookshelf
    self.object.bookshelf.id if self.object.bookshelf
  end
  
end

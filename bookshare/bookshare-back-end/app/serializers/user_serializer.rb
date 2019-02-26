class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :first_name, :last_name, :bookshelf

  def bookshelf
    self.object.bookshelf.id
  end
end

class UserSerializer < ActiveModel::Serializer
  attributes :username, :password, :first_name, :last_name
end

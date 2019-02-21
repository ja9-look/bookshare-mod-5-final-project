class User < ApplicationRecord
    has_many: reviews
    has_one: bookshelf
end

class Api::V1::BookshelvesController < Api::V1::ApplicationController

    def index
        @bookshelves = Bookshelf.all
        render json: @bookshelves
    end

    def show
        @bookshelf = 

end

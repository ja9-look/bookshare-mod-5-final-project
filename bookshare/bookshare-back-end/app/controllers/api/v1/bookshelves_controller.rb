class Api::V1::BookshelvesController < Api::V1::ApplicationController
    def show
        @bookshelf = Bookshelf.find(params[:id])
        # @bookshelf.books
        # @bookshelf.read_books
        # @bookshelf.bought_books
        if current_user == @bookshelf.user 
            render json: { bookshelf: @bookshelf }
        else
            render json: {errors: "User unauthorised." }, status: :unprocessible_entity
        end
    end
end

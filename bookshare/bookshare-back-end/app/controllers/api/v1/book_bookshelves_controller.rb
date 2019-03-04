class Api::V1::BookBookshelvesController < Api::V1::ApplicationController
    
    def show
        @book_bookshelf = BookBookshelf.find(params[:id])
        if current_user == @book_bookshelf.bookshelf.user 
            render json: { book_bookshelf: @book_bookshelf }
        else
            render json: {errors: "User unauthorised." }, status: :unprocessible_entity
        end
    end

    
end

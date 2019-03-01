class Api::V1::BookshelvesController < Api::V1::ApplicationController
    def show
        @bookshelf = Bookshelf.find(params[:id])
        if current_user == @bookshelf.user 
            render json: { bookshelf: @bookshelf }
        else
            render json: {errors: "User unauthorised." }, status: :unprocessible_entity
        end
    end

    def add
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn])
        @book = Book.create(isbn: params[:isbn]) unless @book
        BookBookShelf.create(bookshelf_id: @bookshelf.id, book_id: @book.id, read: false, bought: false)
    end
end

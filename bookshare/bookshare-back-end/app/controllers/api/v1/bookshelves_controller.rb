class Api::V1::BookshelvesController < Api::V1::ApplicationController
    def show
        @bookshelf = Bookshelf.find(params[:id])
        if current_user == @bookshelf.user 
            render json: { bookshelf: BookshelfSerializer.new(@bookshelf) }
        else
            render json: {errors: "User unauthorised." }, status: :unprocessible_entity
        end
    end

    def add
        puts params
        # byebug
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn]).first
        @book = Book.create(isbn: params[:isbn]) unless @book
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:id], book_id: @book.id).first
        @bookbookshelf = BookBookshelf.create!(bookshelf_id: @bookshelf.id, book_id: @book.id, read: false, bought: false, favourite: false) unless @bookbookshelf
        # give back what a fetch would give me
        render json: { message: 'success'}
    end

end

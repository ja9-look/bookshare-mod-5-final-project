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
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn]).first
        @book = Book.create(isbn: params[:isbn]) unless @book
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:id], book_id: @book.id).first
        @bookbookshelf = BookBookshelf.create!(bookshelf_id: @bookshelf.id, book_id: @book.id, read: false, bought: false, favourite: false) unless @bookbookshelf
        render json: { message: 'success' }
    end

    def update_read
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn]).first
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:id], book_id: @book.id).first
        if @bookbookshelf.read 
            @bookbookshelf.update(read: false)
        else
            @bookbookshelf.update(read: true)
        end
        render json: { message: 'updated read status' }
    end

    def update_bought
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn]).first
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:id], book_id: @book.id).first
        if @bookbookshelf.bought 
            @bookbookshelf.update(bought: false)
        else
            @bookbookshelf.update(bought: true)
        end
        render json: { message: 'updated bought status' }
    end

    def update_favourite
        @bookshelf = Bookshelf.find(params[:id])
        @book = Book.where(isbn: params[:isbn]).first
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:id], book_id: @book.id).first
        if @bookbookshelf.favourite 
            @bookbookshelf.update(favourite: false)
        else
            @bookbookshelf.update(favourite: true)
        end
        render json: { message: 'updated favourite status' }
    end

    def delete_book
        @bookshelf = Bookshelf.find(params[:bookshelf_id])
        @book = Book.where(isbn: params[:isbn]).first
        @bookbookshelf = BookBookshelf.where(bookshelf_id: params[:bookshelf_id], book_id: @book.id).first
        @bookbookshelf.delete
        render json: { message: 'deleted book' }
    end

end

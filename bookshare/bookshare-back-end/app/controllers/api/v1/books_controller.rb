class Api::V1::BooksController < Api::V1::ApplicationController
    before_action :find_book, only: [:update]

    def index
        @books = Book.all
        render json: @books
    end

    def update
        @book.update(book_params)
        if @book.save
            render json: @book, status: :accepted
        else
            render json: {errors: @book.errors.full_messages }, status: :unprocessible_entity
        end
    end

    private

    def book_params
        params.permit(:title, :description)
    end

end

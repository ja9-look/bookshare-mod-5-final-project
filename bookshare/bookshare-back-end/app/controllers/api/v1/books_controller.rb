class Api::V1::BooksController < Api::V1::ApplicationController
    before_action :find_book, only: [:update]

    def index
        @books = Book.all
        render json: @books
    end

    private

    def book_params
        params.permit(:title, :description)
    end

end

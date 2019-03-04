class AddFavouriteToBookBookshelf < ActiveRecord::Migration[5.2]
  def change
    add_column :book_bookshelves, :favourite, :boolean, default: false
  end
end

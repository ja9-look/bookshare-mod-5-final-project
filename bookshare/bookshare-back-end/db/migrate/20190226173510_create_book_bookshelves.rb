class CreateBookBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :book_bookshelves do |t|
      t.integer :bookshelf_id
      t.integer :book_id
      t.boolean :read, default: false
      t.boolean :bought, default: false

      t.timestamps
    end
  end
end

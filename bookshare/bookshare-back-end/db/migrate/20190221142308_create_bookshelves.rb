class CreateBookshelves < ActiveRecord::Migration[5.2]
  def change
    create_table :bookshelves do |t|
      t.integer :user_id
      t.integer :read
      t.integer :bought
      t.integer :to_read
      t.integer :favourites

      t.timestamps
    end
  end
end

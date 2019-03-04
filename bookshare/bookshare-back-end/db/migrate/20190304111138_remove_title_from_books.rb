class RemoveTitleFromBooks < ActiveRecord::Migration[5.2]
  def change
    remove_column :books, :title, :string
    remove_column :books, :authors, :string
    remove_column :books, :date, :string
    remove_column :books, :description, :string
    remove_column :books, :avg_rating, :integer
  end
end

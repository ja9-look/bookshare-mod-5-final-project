class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :authors
      t.string :date
      t.string :description
      t.integer :avg_rating

      t.timestamps
    end
  end
end

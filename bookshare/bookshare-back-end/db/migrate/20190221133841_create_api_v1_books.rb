class CreateApiV1Books < ActiveRecord::Migration[5.2]
  def change
    create_table :api_v1_books do |t|

      t.timestamps
    end
  end
end

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Bookshelf.destroy_all
Book.destroy_all

users = [
  {username: 'Ja9', password: 'janine', first_name: 'Janine', last_name: 'L'}
]

users.each {|user| User.create(user)}


bookshelves = [
  {user_id: 1}
]

bookshelves.each {|bookshelf| Bookshelf.create(bookshelf)}

books = [ 
  {isbn: 8772895802}
]

books.each {|book| Book.create(book)}
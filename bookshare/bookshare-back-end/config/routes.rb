Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :bookshelves, except: [:index, :create, :delete]
      post '/bookshelves/:id/add', to: 'bookshelves#add'
      patch '/bookshelves/:id/updateread', to: 'bookshelves#update_read'
      patch '/bookshelves/:id/updatebought', to: 'bookshelves#update_bought'
      patch '/bookshelves/:id/addtofavourites', to: 'bookshelves#update_favourite'
      delete '/bookshelves/:bookshelf_id/book_bookshelves/:isbn', to: 'bookshelves#delete_book'
      post '/login', to: 'auth#create'
      get '/users', to: 'users#index'
      get '/profile', to: 'users#profile'
      get '/bookshelf', to: 'users#bookshelf'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

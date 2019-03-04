Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :bookshelves, except: [:index, :create, :delete]
      get '/bookshelves/add', to: 'bookshelves#add'
      post '/login', to: 'auth#create'
      get '/users', to: 'users#index'
      get '/profile', to: 'users#profile'
      get '/bookshelf', to: 'users#bookshelf'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

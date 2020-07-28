Rails.application.routes.draw do
  require 'sidekiq/web'
  require 'sidekiq-scheduler/web'
  mount Sidekiq::Web => '/sidekiq'
  get 'relationships/create'
  get 'relationships/destroy'
  devise_for :users, controllers: { 
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'}
    devise_scope :user do
      post 'users/guest_sign_in', to: 'users/sessions#new_guest'
    end
  resources :users do
    member do
      get :following, :followers
      get :favorite
      delete :favorite
      get :works
    end
  end
  
  resources :ideas do
    collection do
      get :top
    end
    resources :comments, only: [:create, :edit, :update, :destroy]
  end

  resources :favorites, only: [:create, :destroy]

  resources :relationships, only: [:create, :destroy]

  resources :categories, only: [:show]
  root to: "ideas#top"
end

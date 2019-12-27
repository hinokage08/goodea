Rails.application.routes.draw do
  get 'relationships/create'
  get 'relationships/destroy'
  devise_for :users, controllers: { 
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'}
  resources :users do
    member do
      get :following, :followers
    end
  end
  
  resources :ideas do
    collection do
      get :top, :my_idea
    end
    resources :comments, only: [:create, :edit, :update, :destroy]
  end

  resources :favorites, only: [:create, :destroy]

  resources :relationships, only: [:create, :destroy]

  resources :categories, only: [:show]
  root to: "ideas#top"
end

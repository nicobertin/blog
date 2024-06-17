Rails.application.routes.draw do
  resources :articles
  root to: 'pages#home'
  scope '/auth' do
    post 'login', to: 'authentication#login', as: 'login'
    delete 'logout', to: 'authentication#logout', as: 'logout'
  end

  scope '/admin' do
    get '/login', to: 'admin#login', as: 'login_view'
  end
  
end

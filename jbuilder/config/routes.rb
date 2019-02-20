Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :gifts, :guests, :parties, only: [:index, :show]
  end
end

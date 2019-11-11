Rails.application.routes.draw do
  resources :disciplinas
  resources :testes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "menu#root"
  get "/teste", to: "menu#teste"
  get "/numero/:x/outro/:y", to: "menu#numero"
end

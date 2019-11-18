Rails.application.routes.draw do
  #resources :disciplinas
  #resources :testes
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "menu#root"
  get "/sobre", to: "menu#sobre"
  get "/produtos", to: "menu#produtos"
  get "/galeria", to: "menu#galeria"
  get "/eventos", to: "menu#eventos"
  get "/contato", to: "menu#contato"
  get "/artistas", to: "menu#artistas"
  get "/ajuda-acessibilidade", to: "menu#ajuda-acessibilidade"
  
  
#  get "/teste", to: "menu#teste"
#  get "/numero/:x/outro/:y", to: "menu#numero"
end

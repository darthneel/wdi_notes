require 'sinatra'
require 'sinatra/reloader'

get '/' do 
  erb :index
end

get '/create' do
  p params
end
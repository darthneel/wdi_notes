require 'sinatra'

get '/' do 
  "Good Morning"
end

get '/:words' do 
  "Welcome to \"#{params[:words]}\""
end
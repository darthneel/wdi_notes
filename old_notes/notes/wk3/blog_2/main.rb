require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

# establishes connection, config etc.
ActiveRecord::Base.establish_connection(
    :adapter => 'postgresql',
    :host     => 'localhost',
    :username => 'omardelarosa',
    :database => 'simple_blog',
    :encoding => 'utf8'
)

# connects to model
require_relative 'models/post'

get '/' do 
  # @posts = display_all_posts
  @posts = Post.all
  p @posts
  erb :index
end

post '/create' do 
  title = params[:title]
  body = params[:body]
  Post.create(title: title, body: body)
  redirect '/'
end
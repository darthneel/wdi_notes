require 'pg'
require 'sinatra'
require 'sinatra/reloader'

def connect_to_db
  connection = PG.connect(
      dbname: 'simple_blog'
  )
  return connection
end

def display_all_posts
  rows = []
  @connection = connect_to_db
  @connection.exec("SELECT * FROM posts") do |result|
    # result is an array of 'row' hash-like objects
    result.each do |row|
      # row is a hash-like object with 'keys' named
      # after their respective column names
      rows << row
    end
  end
  return rows
end

def create_new_post(title, body)
  @connection = connect_to_db
  sql_string = "INSERT INTO posts (title, body) VALUES ('#{title}', '#{body}')"
  @connection.exec(sql_string)
end

get '/' do 
  @posts = display_all_posts
  p @posts
  erb :index
end

post '/create' do 
  title = params[:title]
  body = params[:body]
  create_new_post(title, body)
  redirect '/'
end
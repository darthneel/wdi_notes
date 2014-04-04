class UsersController < ApplicationController

	def index
		@users = User.all

		respond_to do |format|
			
			format.html { render :index }
			format.json { render json: @users }

		end

	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		# lame, error version
		@user = User.find(params[:id])
		@user.update_attributes!(params[:user])
		redirect_to users_path
	end

	def secret
		if params[:user_name]
			@user = User.where({name: params[:user_name]})
			if @user != [] && @user.first.role == "admin"
				@message = top_secret_message
			else
				@user = nil
				@message = "Access Denied!"
			end
		else
			@user = nil
			@message = "Access Denied!"
		end

	end

















	private 

	def top_secret_message
		"The secret is a really lame book."
	end

end
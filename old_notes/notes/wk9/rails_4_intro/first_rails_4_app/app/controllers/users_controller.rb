class UsersController < ApplicationController

	def index
		@users = User.all
		
		# respond_to do |format|
		# 	format.html { render :index }
		# 	format.json { render json: @users }
		# end
	end

	def new
		@user = User.new
	end

	def create
		@user = User.create(user_params)
		redirect_to root_path
	end

	def edit
		@user = User.find(params[:id])
	end

	def update
		@user = User.find(params[:id])
		@user.update_attributes!(user_params)
		redirect_to root_path
	end

	private

	def user_params

		params.require(:user).permit(:name, :bio)

	end

end
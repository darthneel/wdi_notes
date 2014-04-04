class User < ActiveRecord::Base
  attr_accessible :bio, :name, :role

  def is_admin?
  	self.role == "admin"
  end

end

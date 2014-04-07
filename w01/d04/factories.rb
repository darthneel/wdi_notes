

def string_factory1

  s = String.new("hello #{(rand*10).round}")

  return s

end

def string_factory2(message)

  s = String.new("your message is: #{message}")

  return s

end

# --------------------

# good as container
cabinet = {}

cabinet[:top_drawer] = "blue sock"
cabinet[:bottom_drawer] = "red sock"

# doesn't quite work as a container
remote_control_car1 = {}
# attribute
remote_control_car1[:wheel_num] = 4

# this is weird and doesn't work
# remote_control_car[:go_forward] = def go_forward; puts "Moving forward!" end

# so how do you represent types of objects with behaviors of their own?

class RemoteControlCar

  def go_forward
    puts "Moving forward!"
  end

end

remote_control_car = RemoteControlCar.new

remote_control_car.go_forward

# ergo:

# hashes are really good for objects with static attributes
# classes are really good for objects with attributes AND behaviors

# so what is the class definition?

# it's the factory of objects of the same classs (i.e. type)

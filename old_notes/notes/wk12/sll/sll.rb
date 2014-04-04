class SinglyLinkedList
  attr_accessor :head, :tail, :count

  def initialize
    @head = nil
    @tail = nil
    @count = 0
  end

  def insert_front(value)
    node = Node.new(value)
    if @head.nil?
    @head = node
    @tail = node
    else
      node.next = @head
      @head = node
    end 
    @count +=1
  end

  def print_first()
    puts head.data
  end

  def print_last()
    puts tail.data
  end

  def exist(value)
    current_node = @head
    until current_node.nil? 
      puts "Searched: #{current_node.data}"
      if current_node.data == value
        return true
      end
      current_node = current_node.next
    end   
      false
  end

  def size()
    count
  end

end

class Node
  attr_accessor :data, :next

  def initialize(data)
    @next = nil 
    @data = data
  end 
end
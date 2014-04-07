require './sll'

list = SinglyLinkedList.new

random_numbers = (1...100).to_a.reverse

random_numbers.each do |number|
  list.insert_front(number)
end

# puts list
# puts random_numbers
# random_number = random_numbers.shuffle[-1]
random_number = 99

if list.exist(random_number)
  puts "Found: #{random_number}"
else
  puts "Not found!"
end
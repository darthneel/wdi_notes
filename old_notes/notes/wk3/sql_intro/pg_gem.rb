require 'pg'

# connect to our database
@conn = PG.connect( dbname: 'students_db')

# our first query: select all
def print_all_students
  @conn.exec("SELECT * FROM students") do |result|
    puts " id  |  first_name | last_name "
    puts "==============================="
    result.each do |row|
      puts "#{row['id']} | #{row['first_name']}  | #{row['last_name']}"
    end
  end
end

# add a new student
def add_student(first_name,last_name)
  @conn.exec("INSERT INTO students (first_name, last_name) VALUES ('#{first_name}', '#{last_name}')")
end

#find billy
def find_by_first_name(first_name)
  @conn.exec("SELECT * FROM students WHERE first_name='#{first_name}'") do |result|
    puts " id  |  first_name | last_name "
    puts "==============================="
    result.each do |row|
      puts "#{row['id']} | #{row['first_name']}  | #{row['last_name']}"
    end
  end
end

# change billy to willy
def rename_student(id,new_name)
  @conn.exec("UPDATE students SET first_name = '#{new_name}' WHERE id=#{id}")
end

# delete billy
def delete_student_by_id(id)
  @conn.exec("DELETE FROM students WHERE id = '#{id}'")
end
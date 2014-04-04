####Loops

#####For ... in
```
for i in (1..10)
  puts i
end
```
#####While

**WARNING: WHILE LOOPS MUST TERMINATE**

```
x = 0
while (x < 10)
  puts x
  x += 1
end
```

#### Nested Loops

![Nested Loop](images/nested_loops.gif)

```
for i in (1..10)
  puts "i: #{i}"  
  for j in (1..10)  
    puts "j: #{j}"    
  end
end
```

#### PRACTICE

Add an options menu to your animal_noises.rb program so that it keeps asking for an animal.

```
output: What animal would you like to hear?
input: cat
output: Meow!
output: What animal would you like to hear?
input: dog
output: Woof!
```

### A few basic programs:

- count to 100
- print a statement 10 times
- find a value in an array
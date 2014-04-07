sum = 0

(3..999).step(3).each do |num|
  sum += num
end

(5..999).step(5).each do |num|
  sum += num
end

(15..999).step(15).each do |num|
  sum -= num
end

puts sum
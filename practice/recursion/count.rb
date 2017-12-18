array = [3,"a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]
hash = {}
array.each do |object|
	hash[object] = array.count(object)
end

count = hash.values.max

puts hash.key(count)
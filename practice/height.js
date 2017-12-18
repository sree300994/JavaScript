var array = [1,2,2,3,4]
i = 0
count = 0
while (i < array.length) {
	if (array[i] < array[i+1]) {
		count += 1
		i += 1
	} else if (array[i] > array[i+1]) {
		count -= 1
		i+=1
	} else {
		i += 1
	}
}

console.log(count);
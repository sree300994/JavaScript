numbers = [10, 20, 30, 35]

number = numbers.filter(function(num) {
	return num % 2 == 0
})
console.log(number);
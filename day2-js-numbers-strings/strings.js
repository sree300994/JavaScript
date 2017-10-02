var password = "secret123";
var firstName = "suresh";
var lastName = "bg";
var sentence = "this is bangalore."
var paragraph = "today is tuesday, today is also a govt holiday"

console.log(password.length); // length property of the string not method

console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(sentence.indexOf('bangalore')); // 8
console.log(sentence.indexOf('chennai')); // -1
console.log(paragraph.indexOf('today')); // 0
console.log(paragraph.lastIndexOf('today')); // 18
console.log(paragraph.lastIndexOf('yesterday')); // -1

console.log(password.charAt(2)); // c
console.log(sentence.search('bangalore')); // 8

console.log(password.includes("secret")); // true

// "*" * 3
console.log("*".repeat(3));
console.log(firstName.repeat(2));


// Extracting from string
var name = "ramachandran"
console.log(name.slice(0,4)); // rama starting and not including the last index
console.log(name.slice(4)); // chandran
console.log(name.substring(0,4)); // rama
console.log(name.substring(4)); // chandran

console.log(name.substr(2,2)); // ma
console.log(name.substr(2,1)); // m
console.log(name.substr(2,3)); // mac

// capitalize
function capitalize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize(name));


var numbers = "1234567890"
// "(123) 456-7890"

var num1 = numbers.slice(0,3);
var num2 = numbers.slice(3,6);
var num3 = numbers.slice(6);
console.log("(" + num1 + ")" +  " " + num2 + "-" + num3);

// only a ES 6 feature i.e., ecmascript 2015
// string interpolation
console.log(`(${num1}) ${num2}-${num3}`);



var sentence = "today is tuesday, today is a govt holiday"
console.log(sentence.includes('today'));
if (sentence.includes('today')) {
	console.log("today is present");
} else {
	console.log("today not present")
}

if (sentence.indexOf('today') != sentence.lastIndexOf('today')) {
	console.log("today is repeated");
} else {
	console.log('today is not repeated')
}



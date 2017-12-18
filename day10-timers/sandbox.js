function add() {
	return 10 + 20;
}

// here we are assigning a function defination to a variable 

var details = function(){
	return "Hi there";
}

console.log(add()); // here add is a function and we are invoking it with the ()

console.log(details); // returns the value of the variable which is a function

console.log(details()); // as the value of the variable is a function we can invoke the function using()

// iffe - immediately invoked function expression

(function(){
	console.log("I called you");
})();






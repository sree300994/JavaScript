function Person(){
	this.firstName;
	this.lastName;
	this.greeting = function(){
		return "Hello" + this.firstName + " " + this.lastName;
	}
}

var p1 = new Person();
p1.firstName = "Ravi";
p1.lastName = "Gadkari";
console.log("Hello" + p1.firstName + " " + p1.lastName);
console.log(p1.greeting());



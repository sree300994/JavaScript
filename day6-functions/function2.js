function add(){
	// variable defined inside a function, is local only to that function and is not available outside the function
	var n1 = 10;
	var n2 = 20;
	console.log(n1,n2);
}

add();
console.log(n1);
console.log(n2);

// function add(){
	// variable defined inside a function without the keyword var will make it a global variable, it is made available outside the function
// 	n1 = 10;
// 	n2 = 20;
// 	console.log(n1,n2); 
// }

// add();
// console.log(n1);
// console.log(n2);


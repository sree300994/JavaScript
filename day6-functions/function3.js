// arguments to functions

function add(n1,n2){
	console.log(n1);
	console.log(n2);
	return n1 + n2;
}

console.log(add(10,20));
// whenever we pass, additional arguments, it will ignore the extra arguments
console.log(add(10,20,30));
// whenever we pass less arguments, the remaining arguments will be treated as undefined by javascript
console.log(add(10));



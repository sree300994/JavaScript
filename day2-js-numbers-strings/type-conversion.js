var n1 = 10;
var n2 = 12.3;
var n3 = 13.6;

console.log(typeof n1.toString());
console.log(typeof n2);
console.log(typeof n1);
console.log(10 == 10.0);

console.log(n1.toString());
console.log(String(n1));

var n4 = "15"
var n5 = "16.7"
console.log(parseInt(n4));
console.log(Number(n4));

console.log(parseInt(n5));
console.log(Number(n5));

console.log(parseFloat(n4));
console.log(typeof parseFloat(n4));
console.log(parseFloat(n5));
console.log(typeof parseFloat(n5));

// NaN - Not a Number
console.log(Number.isNaN(10));
console.log(Number.isNaN("a" * 10));
console.log(typeof "a" * 10);


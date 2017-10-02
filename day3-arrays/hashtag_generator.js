var sentence = "i love bangalore"

var sen = sentence.split(" ");
console.log(sen);
var sym = "#"
sen.forEach(function(word){
	console.log(word);
	console.log(word.charAt(0));
	console.log(word.charAt(0).toUpperCase());
	console.log(word.slice(1));
	sym = sym + word.charAt(0).toUpperCase() + word.slice(1);
	console.log(sym);
});

console.log(sym);
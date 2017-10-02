var spinWords = "Hey fellow warriors" // returns "Hey wollef sroirraw" 
// var spinWords = "This is a test" // returns "This is a test" 
// var spinWords = "This is another test" // returns "This is rehtona test"

var str = spinWords.split(" ");
function rever(str){
	var words = []
	str.forEach(function(word){
		if (word.length > 4) {
			words.push(word.split("").reverse().join(""));
		}
		else {
			words.push(word)
		}
	});	
	return words
}

console.log(rever(str));
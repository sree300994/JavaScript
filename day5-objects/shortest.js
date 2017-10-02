var words = "this is a sentence"

var letter = words.split(" ");
function shortest(letter) {
	var short = letter[0];
	letter.forEach(function(word){
		if (short.length >= word.length) {
			short = word
		}
	});
	return short
}

console.log(shortest(letter));

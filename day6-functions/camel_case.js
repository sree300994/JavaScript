var name = "hello world"
String.prototype.camelCase = function() {
	var result = []
	var words = this.split(" ");
	words.forEach(function(word){
		result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
	});
	return result.join("");
};
console.log(name.camelCase());

var names = ["sheldon", "leonard", "penny", "rajesh", "howard"]

var r = 6;
var i = 0;
while (i < r) {
	var person = names.shift();
	names.push(person, person);
	i ++ ;
}

console.log(names);

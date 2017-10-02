// name value pair
// in js keys are also treated as properties of objects

var person = {
	firstName: "Sree",
	lastName: "Kanth"
}

console.log(person);
console.log("The first name is " + person.firstName);
console.log("The last name is " + person["lastName"]);

person["middleName"] = "Kuraakula";
person.title = "Mr";

console.log(person);

console.log(person.title + ". " + person.firstName + person.lastName + " " + person.middleName)

var players = {
	virat: 3,
	sachin: 2,
	dhoni: 1
}

// players.each do |key,value|

for (var key in players) {
	console.log(key + " appears " + players[key] + " times.")
}


/*
	word frequency
	var str = "virat virat sachin sachin dhoni virat"
	output
	virat - ***
	sachin - **
	dhoni - *
*/


function findUniq(players){
	var result = [];
	players.forEach(function(player){
		if (result.indexOf(player) < 0) {
			result.push(player);
		}
	});
	return result;
}

var str = "virat virat sachin sachin dhoni virat"
var players = str.split(" ");
var player_hash = {}; // new object();
var uniq_players = findUniq(players);
uniq_players.forEach(function(player){
	player_hash[player] = players.filter(function(p){
		return player == p;
	}).length;
});

for(key in player_hash){
	console.log(key + " " + "*".repeat(player_hash[key]))
}










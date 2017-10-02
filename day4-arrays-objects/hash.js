var str = "virat virat sachin sachin virat dhoni"
var players = str.split(" ");
var players_hash = {}
players.forEach(function(player) {
	if (!(player in players_hash)) {
		players_hash[player] = players.filter(function(n){
			return n == player
		}).length;
	}
})

console.log(players_hash);




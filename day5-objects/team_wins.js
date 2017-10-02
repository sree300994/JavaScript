var winnerlist = [
	{season: '1999-00', team: 'Real Madrid', country: 'Spain'},
	{season: '2000-01', team: 'Bayera Munich', country: 'Germany'},
	{season: '2001-02', team: 'Real Madrid', country: 'Spain'},
	{season: '2002-03', team: 'Milan', country: 'Italy'},
	{season: '2003-04', team: 'Porto', country: 'Portugal'}
]


function countwin(winnerlist, country){
	var list = {};
	var count = 0;
	winnerlist.forEach(function(winner){
		if(winner.country == country){
			count ++;
		}
		list[winner.team] = count;
	});
	return list;
}

console.log(countwin(winnerlist, 'Spain'));

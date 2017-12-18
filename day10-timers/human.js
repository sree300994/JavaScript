function formatDuration(time) {
	var hrs, mins, secs;

	hrs = Math.floor(time / 3600);
	mins = Math.floor((time - hrs * 3600) / 60);
	secs = Math.floor(time - (hrs * 3600 + mins * 60));
	return `Hours : ${hrs} - Minutes : ${mins} - Seconds : ${secs}`;
}


console.log(formatDuration(62));
console.log(formatDuration(3662));


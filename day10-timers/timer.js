function leadingZero(time) {
	// reuturn ("0" + time).slice(-2);
	if (time <= 9) {
		time = "0" + time
	}	
	return time;
}

function formatTime(time){
	var hrs, mins, secs;
	hrs = Math.floor(time / 3600);
	mins = Math.floor((time - hrs * 3600)/60);
	secs = Math.floor(time - (hrs * 3600 + mins * 60));
	return `${leadingZero(hrs)}:${leadingZero(mins)}:${leadingZero(secs)}`
}


console.log(formatTime(62));
console.log(formatTime(3662));
console.log(formatTime(4000));


function timeConversion(s) {
	   let time = s.split(":");
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];
    if (seconds.substring(2) === 'PM' && hours !== '12') {
        hours = Number(hours) + 12;
    } else if (seconds.substring(2) === 'AM' && hours === '12') {
        hours = '00';
    }
    return `${hours}:${minutes}:${seconds.substring(0, 2)}`;
}

export const formatTime = (sec) => {
    let hours = parseInt(sec / 3600, 10);
    let restMinutes = parseInt(sec % 3600, 10);
    let minutes = parseInt(restMinutes / 60, 10);
    let seconds = parseInt(restMinutes % 60, 10);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}
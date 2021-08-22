export function calculateTime(timeInSeconds: number) {
    const returnedTime = {
        minutes: '',
        seconds: '',
    };

    // Converting seconds to minutes
    const minutes = Math.floor(timeInSeconds / 60);

    returnedTime.minutes = 
    minutes < 10 
    ? `0${minutes}` 
    : `${minutes}`;

    const seconds = Math.floor(timeInSeconds % 60);

    // Getting the seconds remaning in minutes
    returnedTime.seconds = 
    seconds < 10 
    ? `0${seconds}` 
    : `${seconds}`;

    // Returning formated time
    return `${returnedTime.minutes}:${returnedTime.seconds}`;

}
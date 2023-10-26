const year = new Date().getFullYear();
const myDate = new Date('Oct 27, 2023 16:47:00');

if (isNaN(myDate)) {
    console.error('Invalid date format for myDate');
} else {
    let timer = setInterval(function() {
        const today = new Date().getTime();
        const diff = myDate - today;
        
        if (diff <= 0) {
            clearInterval(timer); // Stop the countdown when the target date is reached
        } else {
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000); // 1-second interval
}

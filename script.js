const myDate = new Date('Oct 30, 2023 19:46:40 UTC'); // Append "UTC" to specify the time zone

if (isNaN(myDate)) {
    console.error('Invalid date format for myDate');
} else {
    let timer = setInterval(function() {
        const now = new Date(); // Get the current time in the user's local time zone
        const nowUTC = new Date(now.toISOString()); // Convert to UTC by using ISO string
        
        if (myDate <= nowUTC) {
            clearInterval(timer); // Stop the countdown when the target date is reached
        } else {
            const diff = myDate - nowUTC;
            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }
    }, 1000); // 1-second interval
}


function MessageTime() {
    const now = new Date();
    const hours = now.getHours();
    let message = "";

    if (hours >= 5 && hours < 12) { //Morning
        message = "Good morning!";
    } else if (hours >= 12 && hours < 18) { //Afternoon
        message = "Good afternoon! 🌤";
    } else if (hours >= 18 && hours < 21) { //Evening
        message = "Good evening! 🌆";
    } else { // Night
        message = "Good night! 🌙";
    }

    document.getElementById('time-of-day-message').textContent = message;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    document.getElementById('live-clock').textContent = timeString;
    MessageTime()
    setTimeout(updateClock, 1000);
}

document.addEventListener('DOMContentLoaded', updateClock);

function updateClock() {
    const now = new Date();

    // Get time components
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate degree rotations for hands
    const secondDegrees = ((seconds / 60) * 360) + 90;
    const minuteDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    // Apply rotations to clock hands with 3D effect
    document.getElementById('second').style.transform = `rotate(${secondDegrees}deg) translateZ(2px)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegrees}deg) translateZ(3px)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegrees}deg) translateZ(4px)`;

    // Update the day and date
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = now.toLocaleString('default', { month: 'short' });

    document.getElementById('day').textContent = dayName;
    document.getElementById('date').textContent = `${month} ${date < 10 ? '0' + date : date}`;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();  // Initial call

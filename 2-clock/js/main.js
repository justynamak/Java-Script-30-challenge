const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

const setDate = function () {
    const time = new Date();
    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = (hours / 12) * 360) + 90;

secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;


}

setInterval(setDate, 1000);
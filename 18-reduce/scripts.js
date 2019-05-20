const timeNodes = [...document.querySelectorAll("[data-time]")];

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [min, secs] = timeCode.split(":").map(parseFloat);
    return min * 60 + secs;
  })
  .reduce((total, seconds) => total + seconds);
let secondsLeft = seconds;
const hours = Math.floor(seconds / 3600);
secondsLeft = seconds % 3600;

const mins = Math.floor(secondsLeft / 60);
secondsLeft = seconds % 60;

console.log(hours, mins, secondsLeft);

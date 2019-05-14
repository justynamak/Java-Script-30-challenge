const pressed = [];
const sectretCode = "funny";

const handleClick = e => {
  console.log(e.key);
  pressed.push(e.key); //dodaje ostatni element 6
  pressed.splice(-sectretCode.length - 1, pressed.length - sectretCode.length); //usuwa pierwszy element tablicy

  if (pressed.join("").includes(sectretCode)) {
    console.log("Poprawny kod!");
  }
  console.log(pressed);
};

window.addEventListener("keyup", handleClick);

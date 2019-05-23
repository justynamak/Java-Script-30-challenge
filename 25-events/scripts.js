const elems = document.querySelectorAll("div");
const button = document.querySelector("button");

function logText(e) {
  console.log(this.classList.value);
  //   e.stopPropagation();
}
elems.forEach(elem =>
  elem.addEventListener("click", logText, {
    capture: true,
    once: true
  })
);
button.addEventListener(
  "click",
  function() {
    console.log("click");
  },
  { once: true }
);

const slider = document.querySelector(".items");
let isDown = false;
let startX;
let startLeft;

const handleMouseDown = e => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  startLeft = slider.scrollLeft;
};
const handleMouseUp = () => {
  isDown = false;
  slider.classList.remove("active");
};
const handleMouseLeave = () => {
  isDown = false;
  slider.classList.remove("active");
};
const handleMouseMove = e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;

  const walk = (x - startX) * 3;
  slider.scrollLeft = startLeft - walk;
};

slider.addEventListener("mousedown", handleMouseDown);
slider.addEventListener("mouseup", handleMouseUp);
slider.addEventListener("mouseleave", handleMouseLeave);
slider.addEventListener("mousemove", handleMouseMove);

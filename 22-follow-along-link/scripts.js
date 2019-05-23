const triggers = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);

function highlightLink() {
  const { width, height, top, left } = this.getBoundingClientRect();
  const coords = {
    width,
    height,
    top: top + window.scrollY,
    left: left + window.scrollX
  };
  console.log(this.getBoundingClientRect());
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(link => link.addEventListener("mouseenter", highlightLink));

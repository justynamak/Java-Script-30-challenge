const panels = document.querySelectorAll(".panel");

const removeClasses = function () {
    panels.forEach(panel => {
        if (panel.classList.contains(".open-active")) {
            panel.classList.remove("open-active")
        }
    });
}
const toggleOpen = function () {
    this.classList.toggle("open");
};

const toggleOpenActive = function (e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active");
    }
};

window.addEventListener("DOMContentLoaded", removeClasses);
panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleOpenActive));
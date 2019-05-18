const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || [];

const addItem = function (e) {
    e.preventDefault();
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateLists(items, itemsList);
    localStorage.setItem("items", JSON.stringify(items));
    this.reset();
}
const toggleDone = function (e) {
    if (!e.target.matches("input")) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem("items", JSON.stringify(items));
    populateLists(items, itemsList);
}
const populateLists = function (plates = [], platesLists) {
    platesLists.innerHTML = plates.map((plate, i) => {
        return `
        <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""}>
        <label for="item${i}">${plate.text}</label>
        </li>
        `
    }).join("");
}

addItems.addEventListener("submit", addItem);
populateLists(items, itemsList);
itemsList.addEventListener("click", toggleDone);
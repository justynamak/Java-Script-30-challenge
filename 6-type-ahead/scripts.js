const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

const findToMatch = function (wordToMatch, cities) {
    return cities.filter(place => {
        const regEx = new RegExp(wordToMatch, "gi");
        return place.city.match(regEx) || place.state.match(regEx);
    });
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const displayMatches = function () {
    const matchArray = findToMatch(this.value, cities);
    console.log(matchArray);
    const html = matchArray.map(place => {
        const regEx = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regEx, `<span class="h1">${this.value}</span>`);
        const stateName = place.city.replace(regEx, `<span class="h1">${this.value}</span>`);
        return `
        <ul>
            <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        </ul>
        `;
    }).join("");
    suggestions.innerHTML = html;

}
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
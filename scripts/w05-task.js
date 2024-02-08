/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {

    for (temple of temples) {
       const article = document.createElement("article");

       const heading = document.createElement("h3");
       heading.textContent = temple.templeName;

       const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(heading);
        article.appendChild(image);

        templesElement.appendChild(article);
    } 
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch ("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */

function reset() {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
function filterTemples(temples){
    reset()
    const filter = document.querySelector("#filtered").value;

switch (filter) {
    case "utah":
        // Filtrar templos localizados em Utah
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
    case "notutah":
        // Filtrar templos localizados fora de Utah
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
    case "older":
        // Filtrar templos dedicados antes de 1950
        displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
        break;
    case "all":
    default:
        // Mostrar todos os templos
        displayTemples(temples);
        break;
}
};

getTemples();

/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {
    filterTemples(templeList);
});

getTemples();
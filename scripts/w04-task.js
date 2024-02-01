/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name : "Icaro Angelo",
    photo : "images/placeholder.jpg",
    favoriteFoods : ["Pizza", "Hamburguer", "Esfiha"],
    hobbies : ["Watching movies", "Boxing", "Playing games"],
    placesLived : [],
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push( 
    {
    place : "Porto Alegre, RS", 
    length : "2 years",
    }
);

myProfile.placesLived.push( 
    {
    place : "João Pessoa, PB", 
    length : "10 years",
    }
);

myProfile.placesLived.push( 
    {
    place : "Guarulhos, SP", 
    length : "5 months",
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
photo.setAttribute("src", myProfile.photo);
photo.setAttribute("alt", `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
for (food of myProfile.favoriteFoods) {
let li = document.createElement("li");
li.textContent = food;
document.querySelector("#favorite-foods").appendChild(li);
}

/* Hobbies List */
for (hobby of myProfile.hobbies) {
    let ul = document.createElement("ul");
    ul.textContent = hobby;
    document.querySelector("#hobbies").appendChild(ul);
    }


/* Places Lived DataList */
const placesLivedList = document.getElementById("places-lived");

myProfile.placesLived.forEach(place => {
    // Create an HTML <dt> element
    const dtElement = document.createElement("dt");
    dtElement.textContent = place.place;

    // Create an HTML <dd> element
    const ddElement = document.createElement("dd");
    ddElement.textContent = place.length;

    // Append <dt> and <dd> elements to the list
    placesLivedList.appendChild(dtElement);
    placesLivedList.appendChild(ddElement);
});


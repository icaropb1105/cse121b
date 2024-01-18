/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Icaro San Angelo";
let currentYear = "2024";
let profilePicture = "images/placeholder.jpg";




/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const pictureElement = document.getElementById("home");



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
pictureElement.setAttribute("src", profilePicture);
pictureElement.setAttribute("alt", `Profile image of ${fullName}`);




/* Step 5 - Array */

let favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Esfiha", "Ice Cream"];
foodElement.innerHTML = favoriteFoods;
let newFood = "Hamburguer";
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;








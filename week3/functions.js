let firstName = 'Antonia';
let lastName = 'Francesca';


function fullName(first, last) {
 return `${first} ${last}`
}

const fullName = function (first, last){
 return `${first} ${last}`
}

const fullName = (first, last) => `${first} ${last}`
   
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);


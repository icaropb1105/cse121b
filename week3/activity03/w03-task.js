/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2)
{
    return number1 + number2;
}

function addNumbers()
{
  let addNumber1 = Number(document.querySelector("#add1").value);
  let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);
/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2) {
    return number1 - number2;
};

const subtractNumbers = function() {
    const subtractNumber1 = Number(document.querySelector("#subtract1").value);
    const subtractNumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
};
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    const factor1 = Number(document.querySelector("#factor1").value);
    const factor2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(factor1, factor2);
};
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}
const divideNumbers = function() {
    const dividend = Number(document.querySelector("#dividend").value);
    const divisor = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(dividend, divisor);
};

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click", function () {
    // Step 1: Declare and instantiate a variable to store the subtotal
    const subtotal = Number(document.querySelector("#subtotal").value);

    // Step 2: Check if the membership checkbox is checked
    const isMember = document.querySelector("#member").checked;

    // Step 3: Apply discount if the user is a member
    const discount = isMember ? 0.15 : 0;
    const discountedTotal = subtotal - (subtotal * discount);

    // Step 4: Output the total to the total span
    const totalSpan = document.querySelector("#total");
    totalSpan.textContent = `$${discountedTotal.toFixed(2)}`;
});

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector("#array").textContent = numbersArray.join(", ");
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.querySelector("#odds").textContent = oddNumbers.join(", ");
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.querySelector("#evens").textContent = evenNumbers.join(", ");
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((total, num) => total + num, 0);
document.querySelector("#sumOfArray").textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let multipliedArray2 = numbersArray.map(num => num * 2);
document.querySelector("#multiplied").textContent = multipliedArray2.join(", ");
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = multipliedArray2.reduce((total, num) => total + num, 0);
document.querySelector("#sumOfMultiplied").textContent = sumOfMultiplied;


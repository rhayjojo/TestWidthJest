// 1
function daysRemainUntilNextChristmas(dateChristmas) {
    const differenceInMillisecond = new Date() - new Date(dateChristmas);

    const daysLeft = Math.ceil(differenceInMillisecond / (1000 * 60 * 60 * 24));
    return daysLeft;
}
// 2 guess number
function CompareInputValueWithRandomNumber(guessNber) {
    const randomNumber = Math.floor(Math.random() * 10 + 1);
    return randomNumber === guessNber ? "Good Work" : "Not match";
}

//3 Write a JavaScript program to calculate multiplication 
//and division of two numbers (input from user).

function MultiplicationAndDivision(nber1, nber2) {
    let mult = nber1 * nber2;
    let div = nber1 / nber2;
    return {mult: mult, div: div};
}

//4 Write a JavaScript program to find the longest string from a given array.

function getLongestString(array) {
    let longerString = array.reduce((longer, current) => {
        return longer.length >= current.length ? longer : current
    }, 0)
    return longerString;
}

//5 Write a JavaScript program to get the largest even number from an array of integers.

function getMaxEvenNumber(array) {
    const longestInteger = array.filter(currentNber => currentNber % 2 === 0).reduce((a, b) => {
        return a >= b ? a : b
    })
    return longestInteger;
}

//6 Write a JavaScript program to remove all characters from a given string that appear more than once.
function DeleteDuplicatedCaracter(str) {
    let arrStr = str.split('');
    const uniqueStr = [...new Set(arrStr)]

    return uniqueStr.join('');
}
// 7  Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.
function sumCube(num) {
    //use other way
    if(num === 0){
        return 0;
    }
    return num ** 3 + sumCube(num - 1);
}

// 8 Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.
function compareObjet(obj1, obj2) {
    //don't use for
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    return keys1.every(key => obj2.hasOwnProperty(key) && obj1[key] === obj2[key])
}


//9 Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.
function filterArray(arr, valuesToRemove) {
    //valuesToRemove
    return arr.filter(element => !valuesToRemove.includes(element));
}

//10 Write a JavaScript program to extract out the values at the specified indexes from a specified array.

function extractValuesOfArray(originalArr, arrIndex) {
    //rename this array
    const specfyIndex = [];
    //...for
    for (let i of arrIndex) {
        specfyIndex.push(originalArr[i])
    }
    return specfyIndex;
}

//11.Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.


function deleteProperty(obj) {
    const originalObj = {...obj}
    const newObj = {...obj};
    delete newObj.rollno
    //return also object before
    return {
         origin: originalObj,
         newOb:  newObj
        }
}

/*12 Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
    Volume of a cylinder : V = πr2h
    where r is the radius and h is the height of the cylinder.
*/

class Cylinder {
    constructor(Radius, Height) {
        this.Radius = Radius;
        this.Height = Height;
    }
    get volum() {
        return this.volume();
    }
    volume() {
        const pi = Math.PI;
        return parseFloat((this.Radius * this.Radius * this.Height * pi).toFixed(5))
    }
}

/*
13. Write a JavaScript program to create a Clock.
Note: The output will come every second.
Expected Console Output :
"14:37:42"
"14:37:43"
"14:37:44"
"14:37:45"
"14:37:46"
"14:37:47"
*/


const  displayTime = () => {
    const clock = setInterval(() => {
        const now = new Date();
        console.log(now.toLocaleTimeString())
    }, 1000);
    setTimeout(() => {
        clearInterval(clock);
    }, 10000);
}


/*14. Write a JavaScript program to check if a string is lower case or not.*/

function checkIfStringIsLowerCaseOrUpperCase(str) {
    return str === str.toUpperCase() ? 'uppercase' : 'lowercase';
}

/*
        15. Write a function called add with two p
        arameters which return a promise containing 
        the result or the error message "Must provide 
        two parameters" in case the user provided only
        no or only one parameter.
*/


function add(a, b) {
    return new Promise((resolve, reject) => {
        if (arguments.length === 2) {
            resolve(a + b)
        } else {
            reject("Must provide two parameters")
        }
    })
}

/*
1. **Variable Declaration:**
 Declare a constant variable called `euler`
 and assign it the value of Euler's number
 (approximately 2.71828) rounded to four 
 decimal places.
*/

const roundedEuler = (euler) => Number.parseFloat(euler.toFixed(4));

/*2. **Arrow Functions:**Write an arrow function called `findMax` that takes an array of numbers as input and returns the largest number in the array. Use the spread operator and Math.max() function.*/

const findMax = (arr) => Math.max(...arr);

/*Create a template literal that includes   variables `product`, `price`, and `quantity`.The template should output "You purchased [quantity] 
units of [product] for $[totalPrice].".*/


function displayProductWitchTemplateLitteral(product, quantity, price) {
    const totalPrice = (quantity * price);
    return `You purchased ${quantity} units of ${product} for ${totalPrice}.`;
}
/*
4.
Given two arrays `arr1` and `arr2`, create a new array `combinedArr` that contains all the unique elements from both arrays, sorted in ascending order.
*/

function uniqueArray(arr1, arr2) {
    let combinedArr = [...arr1, ...arr2];
    return [...new Set(combinedArr)].sort();
}

/*
5. **Destructuring Assignment:**
Declare an object called `car` with properties `make`, 
`model`, and `year`. Use destructuring assignment with 
default values to extract `make` and `model`, and assign 
the default value "unknown" to `year`.
*/

const car = {
    make: "Toyota",
    model: "Corolla",
    year: "unknown"
}

const { make, model, year } = car


/*
6. **Default Parameters:**
Write a function called `calculateArea` that takes the radius of a circle as a parameter. The function should return the area of the circle. If no radius is provided, the function should throw an error with the message "Radius is missing!".
*/
function calculateArea(radius) {
    const pi = Math.PI
    return radius === undefined ? "Radius is missing!" : radius * radius * pi;
}

/*
7. **Rest Parameters:**
Write a function called `average` that takes any number of arguments (representing scores) and returns the average score. Round the result to two decimal places.
*/

function average(...args) {
    let sum = args.reduce((acc, current) => acc + current, 0);
    return parseFloat((sum / args.length).toFixed(2));
}

/*
8. **Map Method:**
Given an array of strings, use the `map` method to create a new array where each string is reversed.
*/

const getReverseStrings = (arr) => arr.map((str) => str.split('').reverse().join(''));

/*
9. **Filter Method:**
Given an array of objects representing books (each object has properties `title` and `pages`), use the `filter` method to create a new array containing only the books with more than 300 pages.
*/
const booksWithMoreThan300Pages = (obj) => obj.filter(book => book.pages > 300)

/*
10.Write a function called `fetchData` that simulates fetching data from an API. It should return a promise that resolves with the string "Data fetched successfully!" after a random delay between 2 to 8 seconds.
*/

const fetchData = () => {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 7000) + 2000;
        setTimeout(() => {
            resolve('Data fetched successfully!');
        }, delay);
    });
};




module.exports = {
    daysRemainUntilNextChristmas,
    MultiplicationAndDivision,
    getLongestString,
    getMaxEvenNumber,
    DeleteDuplicatedCaracter,
    sumCube,
    compareObjet,
    filterArray,
    extractValuesOfArray,
    deleteProperty,
    Cylinder,
    checkIfStringIsLowerCaseOrUpperCase,
    add,
    roundedEuler,
    findMax,
    displayProductWitchTemplateLitteral,
    uniqueArray,
    calculateArea,
    average,
    getReverseStrings,
    booksWithMoreThan300Pages,
    fetchData,
    CompareInputValueWithRandomNumber,
    displayTime
};
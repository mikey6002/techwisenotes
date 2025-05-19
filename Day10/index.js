console.log("Hello World");

let nickname = "Akon"
let age = 23

console.log(nickname, age);

var firstName = "John"

const lastName = "Doe"

console.log(firstName, lastName);

// lastName = "Smith"

// console.log(lastName);

age = 24

console.log(age);


let attendance = 86

if (attendance > 80) {
    console.log("You are a genius");
} else {
    console.log("Attendance requirements not met")
}

let grade = 85

if (grade >= 90) {
    console.log("A")
} else if (grade >= 80) {
    console.log("B")
} else if (grade >= 70) {
    console.log("C")
} else if (grade >= 60) {
    console.log("D")
} else {
    console.log("F")
}

let outside = "outside"
console.log(outside)
{
    // console.log(outside)
    let outside = "outside: in here"
    console.log(outside)

    let inside = "inside"
    console.log(inside)
}

console.log(outside)
// console.log(inside)

console.log("-------------With var-------------------")
// var is old way of declaring variables
// has a ton of issues, specially with scope
var outside2 = "outside"
console.log(outside2)
{
    console.log(outside2)
    var outside2 = "outside: in here"
    console.log(outside2)

    var inside2 = "inside"
    console.log(inside2)
}

console.log(outside2)
console.log(inside2)

// conditionals Part 2

// >, <, >=, <=, ==, ===, !=, !==

console.log("--------------Conditional Part 2------------------")
// type coercion, which type casting, switching types to the other variable
console.log(10 == "10") // true

// strict equality, aka tripe =, doesn't do type coercion
console.log(10 === "10") // false

// !=, !==

console.log(10 != "10") // false
console.log(10 !== "10") // true

// arrays

let myArray = ["Hello", "World", "!"]

console.log(myArray)

// for loop

// java style or c style
// i++ is the same as i = i + 1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for of loop
let myArray2 = ["Hello", "World", "!"]
for (let item of myArray2) {
    console.log(item);
}
// for item in myArray2:
//     print(item)

for (char of "fruits") {
    console.log(char);
}

// better in my opinion, be more specific
for (let char of "fruits") {
    console.log(char);
}


// functions

console.log("--------------Functions------------------");

function square(num) {
    return num * num;
}

console.log(square(5));

function divMod(x, y) {
    return [Math.floor(x/y), x%y];
}

const cookies = 17;
const people = 5;

const values = divMod(cookies, people);
console.log(values);

const [quotient, remainder] = divMod(cookies, people);
console.log(quotient, remainder);


const quotRem = function(x, y) {
    return [Math.floor(x/y), x%y];
}

const squareArrow = (num) => num * num;

console.log(squareArrow(5));

const squareArrow2 = (num) => {
    return num * num;
}

const celebrate = () => console.log("Happy Birthday!");

celebrate();

const fruits = ["apple", "banana", "cherry"];

console.log(fruits);

fruits.forEach(fruit => console.log(fruit));

// map returns a new array
// not the best used of maps below
const newFruits = fruits.map(fruit => console.log(fruit));

console.log(newFruits);

const newFruits2 = fruits.map(fruit => fruit.toUpperCase());

console.log(newFruits2);
console.log(fruits);

// Objects

const dirtyChai = {
    expresso: 2,
    isChai: true,
    milk: "whole",
    isIced: false,
}
// properties in the object that dirtyChai is assigned (or pointing to) is mutable
dirtyChai.sprinkles = 'cinnamon'; // dot notation
// dirtyChai["isIced"] = true; // bracket notation

// const prop = "isIced";
// dirtyChai[prop] = true;

dirtyChai.expresso = 3;

console.log(dirtyChai);


// the following is a reassignment of dirtyChai
// this is not allowed in javascript
// dirtyChai = {
//     expresso: 4,
//     isChai: true,
//     milk: "whole",
//     isIced: false,
// }

console.log("--------------Classes using functions constructor------------------");
function FancyDrink(espresso, milk="whole", sprinkles=null, isIced=false, isChai=false) {
    this.espresso = espresso;
    this.milk = milk;
    this.isIced = isIced;
    this.sprinkles = sprinkles;
    this.isChai = isChai;
    this.drink = () => console.log("that was a good drink");
    this.toString = () => {
        // backtick is like f-string in python
        return `This is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
    }
}

// class is another option

const myDrink = new FancyDrink(4, "whole", "cinnamon");
const lateDrink = new FancyDrink(2, "whole");
const icedChai = new FancyDrink(2, "almond milk", null, true, true);

console.log(myDrink);
console.log(lateDrink);
console.log(icedChai);

console.log(String(myDrink));
console.log(String(lateDrink));
console.log(String(icedChai));

// console.log(icedChai.toString());

myDrink.drink();
lateDrink.drink();
icedChai.drink();


const myDrink2 = new FancyDrink();

console.log(myDrink2); // everything is undefined
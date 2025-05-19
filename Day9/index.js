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


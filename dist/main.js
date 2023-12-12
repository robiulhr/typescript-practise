"use strict";
console.log("hello world");
console.log("added the watcher in command line");
console.log("updated the source dir and output dir in tsconfig.json file");
// -------------------------------- way to declare variable in typescript
let a = 25;
// a = "a"  // error
let b = "hello world";
// b = 23 // error
// different way to declare variable in typescript
let c = "string type";
// c = 34
// ---------------------------------- define array in typescript
const arr = [1, 3, 5];
let arr1;
// arr1 = ['hello']  // error
arr1 = [1, 3, 5, 6];
// arr1[0] = 'hello'  // error
arr1[0] = 2;
let arr2;
// arr2 = [1,5,6] // error
arr2 = ["hello"];
// define array of array
const counts = [
    [4, 5, 6],
    [7, 8, 9],
];
const countsStr = [
    ["one", "two"],
    ["three", "four"],
];
// --------------------------- define tuple in array (speacial type of array to store different datatypes in an array)
let numbers = [1, 2, "one", "two"];
// numbers[0] = 'one'    // error
// numbers[2] =  1       // error
numbers.push("hello");
console.log(numbers);
// --------------------------------- define object in typescript
const obj1 = {
    name: "robiul",
    age: 23,
};
// obj`.name = 22 // error
let obj2;
obj2 = { name: "robiul", age: 23 };
const objType1 = { name: "robiul", age: 23 };
const obj3 = {
    name: "robiul",
    age: 23,
    getName: function () {
        return this.name;
    },
};
let obj4;
obj4 = {
    name: "robiul",
    age: 23,
    getName: function () {
        return this.name;
    },
};
const parentObj1 = {
    element1: "element1",
    element2: 2,
    element3: true,
    element4: (num1, num2) => num1 + num2,
};
const childObj2 = {
    element1: "element1",
    element2: 2,
    element3: true,
    element4: (num1, num2) => num1 + num2,
    element5: 5,
    element6: "element6",
    element7: false,
    element8: (num1, num2) => num1 - num2,
};
// ------------------------------- Multi Type Multidimensional TypeScript Arrays
// ----------------- array of tuple
const twoWayNumbers = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
];
// ---------------- more complex array
// const school: { class: string; students: { name: string; roll: [string, number] }[] }[] = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];
// alternative
const school = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];
// ------------------------------------   define function in typescript
// define function using function Declaration
function printNum(num1, num2) {
    console.log(num1, num2);
    // returns nothing
}
function addNum(num1, num2) {
    return num1 + num2;
    // returns number
}
// define function using arrow function expression
const subNum = (num1, num2) => {
    return num1 - num2;
    // returns number
};
// define function using function Expression
const mulNum = function (num1, num2) {
    return num1 + num2;
    // returns number
};
const address1 = {
    country: "BD",
    zipcode: 2340,
    district: "Kishoreganj",
};
const printAddress = (address, greetWord, distance) => {
    // distance is optional
    console.log(`${greetWord}, Here is the adress: Country: ${address.country}, District: ${address.district}, Zipcode: ${address.zipcode}`);
    distance && console.log(`Distance is ${distance}`);
};
printAddress(address1, "Hello");
const name1 = {
    firstName: "robiul",
    lastName: "hasan",
    getFullName: function () {
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    },
    greet: function () {
        console.log(`Hello, ${this.firstName}`);
    },
};
const fullNameOfName1 = name1.getFullName();
console.log(`name1's full name is ${fullNameOfName1}`);
const robiulEduction = {
    Hsc: 2019,
    studing: false,
};
function printStudy(education, congratsWord = "Congratulations", congratsCount) {
    // congratsWord has a default value 'Congratulations'
    console.log(`I have passed my Hsc exam in ${education.Hsc}. ${!education.studing ? "currently i am not studing anymore" : "currently i am studing."}`);
    console.log(`${congratsWord}.${congratsCount ? `congratulate ${congratsCount} times` : ""}`);
}
printStudy(robiulEduction);
const object2 = {
    element1: 2,
    element2: "hello",
    element3: true,
};
object2.element1 = 6; // fine to do that
// object2.element3 = 6; // error (can't change readonly values)
// ----------------------------------- rest operator
const addAllNumbers = function (...numbers) {
    return numbers.reduce((start, curr) => {
        return start + curr;
    });
};
// ---------------------------------------- function with object
const getData = (product) => {
    console.log(product.name, product.price, product.url, product.quantity);
};
const getAnotherData = (product) => {
    console.log(product.name, product.price, product.url, product.quantity);
};
const getMoreData = (product) => {
    console.log(product.name, product.price, product.url, product.quantity);
};
// ---------------------------  union type
let d = 2;
// d = 'hello world'    // this is fine
let e = "hi";
e = 2; // this is fine
function greetings(greetWord, count) {
    console.log(`Say, ${greetWord} ${count} times.`);
}
let nums;
nums = [1, 4, 6];
nums = ["hello", "world"];
// nums = [true]   // error
let nums1;
nums1 = [1, 2, 4];
nums1 = ["hello", "world"];
nums1 = [true, false];
function greetUser(user, greetWord, greetCount) {
    console.log(`${greetWord} i am ${user.name}. I am ${user.age} years old. My birth date is ${user.dateOfBirth}. I live in ${user.address}`);
    console.log(`Hello ${user.name}. greet ${greetCount} times...`);
}
const robiul = {
    name: "robiul",
    age: 23,
    education: "HSC",
    address: "Bhairab",
    dateOfBirth: "22 january",
};
greetUser(robiul, "hello", 10);
const addNumbers = (num1, num2, num3 = 20) => {
    const result = num3 ? num1 + num2 + num3 : num1 + num2;
    console.log(result);
    return result;
};
addNumbers(10, 20);
const buyProduct = function (user, product, thanksWord, thanksCount) {
    console.log(`I am ${user.name}. I wanna buy ${product.quantity}pcs ${product.name}. My choosen color is ${product.color}`);
    console.log(`${thanksWord} for your order ${user.name}. your order will be send soon... give thanks ${thanksCount} times`);
};
const product = {
    name: "t-shirt",
    size: "L",
    color: "white",
    quantity: 1,
};
buyProduct(robiul, product, "Thanks", 10);
const yObj = {
    value1: "one",
    value2: 2,
    value3: 3,
};
const dObj = {
    value1: "one",
    value2: 2,
    value3: 3,
    value4: "four",
    value5: 5,
};
class Game {
    constructor(gameName, institute) {
        this.gameName = gameName;
        this.institute = institute;
    }
}
class Player {
    constructor(firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
    lastName, height, // in inch
    weight, age, country, // this value can't be changed
    nationality, middleName // not any modifier applied before middleName and other properties, as TypeScript treats properties and methods as public by default if no modifier is applied to them.
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.country = country;
        this.nationality = nationality;
        this.middleName = middleName;
        this.inchToCM = 2.5400013716; // this value can be accessed for this class
        this.greetWord = "Hello"; // this value can be accessed for this class and it's subclasses
    }
    // Note: TypeScript require optional parameters after required parameters
    // --------------- getter ('get' accessor is not callable using `()` parenthesis)
    // not getFullName() will be getFullName
    get getFullName() {
        return `${this.firstName} ${this.middleName ? `${this.middleName} ` : ""}${this.lastName}`;
    }
    getHeight(unit) {
        // unit is optional here
        return unit === "cm" ? this.height * this.inchToCM : this.height;
    }
    greetPlayer() {
        console.log(`${this.greetWord} ${this.getFullName}`);
    }
    // ---------------- setter
    set setFirstName(firstName) {
        this.firstName = firstName;
    }
}
class Tournament extends Game {
    constructor(tournamentName, year, organizer, gameName, institue) {
        super(gameName, institue);
        this.tournamentName = tournamentName;
        this.year = year;
        this.organizer = organizer;
    }
}
// --------- for cricket
const CricketDetails = { gameName: "Cricket", institute: "ICC" };
class CricketPlayer extends Player {
    constructor(firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
    lastName, height, // in inch
    weight, age, country, // this value can't be changed
    nationality, playerType, battingPossition, matchPlayed, middleName) {
        super(firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
        lastName, height, // in inch
        weight, age, country, // this value can't be changed
        nationality, middleName);
        this.firstName = firstName;
        this.lastName = lastName;
        this.height = height;
        this.weight = weight;
        this.age = age;
        this.country = country;
        this.nationality = nationality;
        this.playerType = playerType;
        this.battingPossition = battingPossition;
        this.matchPlayed = matchPlayed;
        this.middleName = middleName;
        const playerInstance = new Game(CricketDetails.gameName, CricketDetails.institute);
        // Copy properties from Game and Player instances to CricketPlayer
        Object.assign(this, playerInstance);
    }
}
const player1 = new CricketPlayer("robiul", "hasan", 64, 56, 23, "BD", "Bangladeshi", "Batsman", "Middle Order", 10);
const CricketTournament = new Tournament("CWC", 2023, "India", CricketDetails.gameName, CricketDetails.institute);
console.log(CricketTournament, player1);
console.log("full name", player1.getFullName);
player1.greetPlayer();
// --------------------------------- type assertion
// const btn = document.querySelector("button");
// btn.onclick = function () {        // error : 'btn' is possibly 'null'.
//    console.log("hello world");
// };
// ----------- solution
// const btn = document.querySelector("button") as HTMLButtonElement;
// or
/**
 * in the way below we are telling the compiler to treat it as not null.
 * this way will work but not recomended.
 * since it's telling the compiler to treat it as not null so the compiler won't throw error even this provide a null value which can occour unexpected behaviour.
 */
// const btn = document.querySelector("button")!;
/**
 * also the compiler won't give us nesecery recomendation for the variable since it doesn't the exact type for the variable.
 * For example: for a image element it won't give recomendation for it's available properties and methods like src, textContent and other dom properties and methods.
 */
// or
const btn = document.querySelector("button");
btn.onclick = function () {
    console.log("hello world");
};
// ======================= small task (calculator)
const selectElment = document.querySelector("select");
let selectElmentValue = selectElment.value;
const number1 = document.querySelector("#number_1");
const number2 = document.querySelector("#number_2");
const submitBtn = document.querySelector("input[type='submit']");
const resultText = document.querySelector("#result");
const calculate = function (num1, num2, equationType) {
    console.log(equationType, num1, num2);
    switch (equationType) {
        case "addition":
            return num1 + num2;
        case "substraction":
            return num1 - num2;
        case "multiplication":
            return num1 * num2;
        case "divition":
            return num1 / num2;
    }
    return 0;
};
selectElment.addEventListener("change", (e) => {
    selectElmentValue = selectElment.value;
});
submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const num1 = +number1.value;
    const num2 = +number2.value;
    const result = calculate(num1, num2, selectElment.value);
    resultText.textContent = String(result);
    console.log(result);
});
const person1 = {
    name: "robiul",
    age: 23,
};
const getName = function () {
    return person1["name"];
};
const getAge = function () {
    return person1["age"];
};
/**
 * this will through error because we are using dynamic key to access the object property.
 * Here we can pass any key as the argument of the function, which may not available in the object and can get undefined as the value that's why typescript compiler throwing error.
 */
// const getPersonData = function (key: string) {
//   return person1[key];
// };
// ---------- solution
// to solve the error we will use the keyof keyword
// const getPersonData = function (key: keyof Person) {
//   return person1[key];
// };
// or
const getPersonData = function (key) {
    // here the typeof keyword has been used to refer the type of the person1 object not it's value
    return person1[key];
};
console.log(getPersonData("name"));
console.log(getPersonData("age"));
const employee1 = {
    name: "robiul",
    age: 23,
    experience: 2,
    skill: "web development",
};
// print all elements
let key;
for (key in employee1) {
    console.log(employee1[key]);
}
Object.keys(employee1).forEach((key) => {
    console.log(employee1[key]);
});
Object.keys(employee1).forEach((key) => {
    console.log(employee1[key]);
});
// --------------------------- few key points ----------------------------------
// never type
// theme mode

console.log("hello world");
console.log("added the watcher in command line");
console.log("updated the source dir and output dir in tsconfig.json file");

// -------------------------------- way to declare variable in typescript

let a = 25;
// a = "a"  // error

let b: string = "hello world";

// b = 23 // error

// different way to declare variable in typescript

let c = <string>"string type";

// c = 34

// ---------------------------------- define array in typescript

const arr = [1, 3, 5];

let arr1: number[];

// arr1 = ['hello']  // error

arr1 = [1, 3, 5, 6];

// arr1[0] = 'hello'  // error

arr1[0] = 2;

let arr2: Array<string>;

// arr2 = [1,5,6] // error

arr2 = ["hello"];

// define array of array

const counts: number[][] = [
  [4, 5, 6],
  [7, 8, 9],
];
const countsStr: string[][] = [
  ["one", "two"],
  ["three", "four"],
];

// --------------------------- define tuple in array (speacial type of array to store different datatypes in an array)

let numbers: [number, number, string, string] = [1, 2, "one", "two"];

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

let obj2: { name: string; age: number };

obj2 = { name: "robiul", age: 23 };

// obj2.name = 23 // error

type objType = { name: string; age: number };

const objType1: objType = { name: "robiul", age: 23 };

// ------------------------------------   interface keyword

interface obj {
  name: string;
  age: number;
  getName: () => string;
}

const obj3: obj = {
  name: "robiul",
  age: 23,
  getName: function () {
    return this.name;
  },
};

let obj4: obj;

obj4 = {
  name: "robiul",
  age: 23,
  getName: function () {
    return this.name;
  },
};

// Note: interface works like class

interface parentObj {
  element1: string;
  element2: number;
  element3: boolean;
  element4: (num1: number, num2: number) => number;
}

const parentObj1: parentObj = {
  element1: "element1",
  element2: 2,
  element3: true,
  element4: (num1, num2) => num1 + num2,
};

interface childObj extends parentObj {
  element5: number;
  element6: string;
  element7: boolean;
  element8: (num1: number, num2: number) => number;
}

const childObj2: childObj = {
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
const twoWayNumbers: [string, number][] = [
  ["one", 1],
  ["two", 2],
  ["three", 3],
];
// ---------------- more complex array

// const school: { class: string; students: { name: string; roll: [string, number] }[] }[] = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];

// alternative
const school: Array<{ class: string; students: { name: string; roll: [string, number] }[] }> = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];

// ------------------------------------   define function in typescript

// define function using function Declaration
function printNum(num1: number, num2: number): void {
  console.log(num1, num2);
  // returns nothing
}

function addNum(num1: number, num2: number): number {
  return num1 + num2;
  // returns number
}

// define function using arrow function expression
const subNum = (num1: number, num2: number): number => {
  return num1 - num2;
  // returns number
};

// define function using function Expression
const mulNum = function (num1: number, num2: number): number {
  return num1 + num2;
  // returns number
};

// ------------------------------- optional parameter

interface address {
  country: string;
  zipcode: number;
  district: string;
  village?: string; // this value is optional
}

const address1: address = {
  country: "BD",
  zipcode: 2340,
  district: "Kishoreganj",
};

const printAddress = (address: address, greetWord: string, distance?: number): void => {
  // distance is optional
  console.log(`${greetWord}, Here is the adress: Country: ${address.country}, District: ${address.district}, Zipcode: ${address.zipcode}`);
  distance && console.log(`Distance is ${distance}`);
};

printAddress(address1, "Hello");

interface name {
  firstName: string;
  middleName?: string;
  lastName: string;
  getFullName: () => string;
  greet?: () => void;
}

const name1: name = {
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

// name1.greet();           // error (since greet method is optional so it's value can be undefiened)

// ---------------------------------- default value parameter in function

interface education {
  Hsc: number;
  studing: boolean;
}

const robiulEduction: education = {
  Hsc: 2019,
  studing: false,
};

function printStudy(education: education, congratsWord: string = "Congratulations", congratsCount?: number) {
  // congratsWord has a default value 'Congratulations'
  console.log(`I have passed my Hsc exam in ${education.Hsc}. ${!education.studing ? "currently i am not studing anymore" : "currently i am studing."}`);
  console.log(`${congratsWord}.${congratsCount ? `congratulate ${congratsCount} times` : ""}`);
}

printStudy(robiulEduction);

// --------------------------------------  read only keyword in object

interface object1 {
  element1: number;
  element2: string;
  readonly element3: boolean;
  element4?: () => void;
}

const object2: object1 = {
  element1: 2,
  element2: "hello",
  element3: true,
};

object2.element1 = 6; // fine to do that
// object2.element3 = 6; // error (can't change readonly values)

// ----------------------------------- rest operator

const addAllNumbers = function (...numbers: number[]): number {
  return numbers.reduce((start, curr) => {
    return start + curr;
  });
};

// ---------------------------------------- function with object

const getData = (product: { name: string; price: number; url: string; quantity: number }): void => {
  console.log(product.name, product.price, product.url, product.quantity);
};

// another way to do that
type productDataType = { name: string; price: number; url: string; quantity: number };
type getAnotherDataType = (product: productDataType) => void;

const getAnotherData: getAnotherDataType = (product) => {
  console.log(product.name, product.price, product.url, product.quantity);
};

// another way to do that
interface moreProductType {
  name: string;
  price: number;
  url: string;
  quantity: number;
}
type getMoreDataType = (product: moreProductType) => void;

const getMoreData: getMoreDataType = (product) => {
  console.log(product.name, product.price, product.url, product.quantity);
};

// ---------------------------  union type

let d: string | number = 2;

// d = 'hello world'    // this is fine

let e: number | string = "hi";

e = 2; // this is fine

function greetings(greetWord: string, count: number | string): void {
  console.log(`Say, ${greetWord} ${count} times.`);
}

let nums: (number | string)[];

nums = [1, 4, 6];

nums = ["hello", "world"];

// nums = [true]   // error

let nums1: Array<number | string | boolean>;

nums1 = [1, 2, 4];

nums1 = ["hello", "world"];

nums1 = [true, false];

// ------------------------------ type keyword in typescript (custom type)

type strNum = string | number;
type userType = { name: string; age: number; education: string; address: string; dateOfBirth: strNum };
type voidString = void | string;

function greetUser(user: userType, greetWord: string, greetCount: strNum): voidString {
  console.log(`${greetWord} i am ${user.name}. I am ${user.age} years old. My birth date is ${user.dateOfBirth}. I live in ${user.address}`);
  console.log(`Hello ${user.name}. greet ${greetCount} times...`);
}

const robiul: userType = {
  name: "robiul",
  age: 23,
  education: "HSC",
  address: "Bhairab",
  dateOfBirth: "22 january",
};

greetUser(robiul, "hello", 10);

type addNumbersType = (num1: number, num2: number, num3?: number) => number;

const addNumbers: addNumbersType = (num1, num2, num3 = 20) => {
  const result = num3 ? num1 + num2 + num3 : num1 + num2;
  console.log(result);
  return result;
};

addNumbers(10, 20);

// more advanced use of type keyword in typescript

type productType = { name: string; size: strNum; color: string; quantity: number };
type buyProductType = (user: userType, product: productType, greetWord: string, greetCount: strNum) => voidString;

const buyProduct: buyProductType = function (user, product, thanksWord, thanksCount): voidString {
  console.log(`I am ${user.name}. I wanna buy ${product.quantity}pcs ${product.name}. My choosen color is ${product.color}`);
  console.log(`${thanksWord} for your order ${user.name}. your order will be send soon... give thanks ${thanksCount} times`);
};

const product: productType = {
  name: "t-shirt",
  size: "L",
  color: "white",
  quantity: 1,
};

buyProduct(robiul, product, "Thanks", 10);

// ----------------------------- type can be extended like class

type x = {
  value1: string;
  value2: number;
};

type y = x & {
  value3: number;
};

const yObj: y = {
  value1: "one",
  value2: 2,
  value3: 3,
};

// -------------------------------- interface can be extended from type

type a = {
  value1: string;
  value2: number;
};

type b = a & {
  value3: number;
};

interface c extends b {
  value4: string;
}

interface d extends c {
  value5: number;
}

const dObj: d = {
  value1: "one",
  value2: 2,
  value3: 3,
  value4: "four",
  value5: 5,
};

// ------------------------------- class in typescript

interface GameType {
  gameName: string;
  institute: string;
}

class Game implements GameType {
  constructor(public gameName: string, public institute: string) {}
}

interface PlayerType {
  firstName: string;
  middleName?: string;
  lastName: string;
  height: number;
  weight: number;
  age: number;
  country: string;
  nationality: string;
}

interface PlayerMethodsType {
  getHeight: (unit?: string) => number;
  greetPlayer: () => void;
}

class Player implements PlayerType, PlayerMethodsType {
  private inchToCM: number = 2.5400013716; // this value can be accessed for this class
  protected greetWord: string = "Hello"; // this value can be accessed for this class and it's subclasses
  constructor(
    public firstName: string, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
    public lastName: string,
    public height: number, // in inch
    public weight: number,
    public age: number,
    readonly country: string, // this value can't be changed
    readonly nationality: string,
    public middleName?: string // not any modifier applied before middleName and other properties, as TypeScript treats properties and methods as public by default if no modifier is applied to them.
  ) {}
  // Note: TypeScript require optional parameters after required parameters
  // --------------- getter ('get' accessor is not callable using `()` parenthesis)
  // not getFullName() will be getFullName
  get getFullName(): string {
    return `${this.firstName} ${this.middleName ? `${this.middleName} ` : ""}${this.lastName}`;
  }
  getHeight(unit?: string): number {
    // unit is optional here
    return unit === "cm" ? this.height * this.inchToCM : this.height;
  }
  greetPlayer(): void {
    console.log(`${this.greetWord} ${this.getFullName}`);
  }
  // ---------------- setter
  set setFirstName(firstName: string) {
    this.firstName = firstName;
  }
}

interface TournamentType extends GameType {
  tournamentName: string;
  year: number;
  organizer: string;
}

class Tournament extends Game implements TournamentType {
  constructor(readonly tournamentName: string, readonly year: number, readonly organizer: string, gameName: string, institue: string) {
    super(gameName, institue);
  }
}

// --------- for cricket

const CricketDetails: GameType = { gameName: "Cricket", institute: "ICC" };

interface CricketPlayerType extends PlayerType {
  playerType: string;
  battingPossition: number | string;
  matchPlayed: number;
}

class CricketPlayer extends Player implements CricketPlayerType {
  constructor(
    public firstName: string, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
    public lastName: string,
    public height: number, // in inch
    public weight: number,
    public age: number,
    readonly country: string, // this value can't be changed
    readonly nationality: string,
    public playerType: string,
    public battingPossition: number | string,
    public matchPlayed: number,
    public middleName?: string
  ) {
    super(
      firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
      lastName,
      height, // in inch
      weight,
      age,
      country, // this value can't be changed
      nationality,
      middleName
    );
    const playerInstance = new Game(CricketDetails.gameName, CricketDetails.institute);
    // Copy properties from Game and Player instances to CricketPlayer
    Object.assign(this, playerInstance);
  }
  //   function(){
  //     console.log(this.greetWord) // greetWord can be access here since CrickPlayer is subclass of the Player class
  //   }
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

const btn = <HTMLButtonElement>document.querySelector("button");

btn.onclick = function () {
  console.log("hello world");
};

// ======================= small task (calculator)

const selectElment = document.querySelector("select") as HTMLSelectElement;
let selectElmentValue = selectElment.value;
const number1 = document.querySelector("#number_1") as HTMLInputElement;
const number2 = document.querySelector("#number_2") as HTMLInputElement;
const submitBtn = document.querySelector("input[type='submit']") as HTMLInputElement;
const resultText = document.querySelector("#result") as HTMLParagraphElement;
const calculate = function (num1: number, num2: number, equationType: string): number {
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

// ------------------------------------- keyof keyword

interface Person {
  name: string;
  age: number;
}

const person1: Person = {
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
const getPersonData = function (key: keyof typeof person1) {
  // here the typeof keyword has been used to refer the type of the person1 object not it's value
  return person1[key];
};

console.log(getPersonData("name"));
console.log(getPersonData("age"));

// console.log(getPersonData("lol")); // this will throw error since the Person interface doesn't have any property named lol

// --------- another example

interface Employee extends Person {
  experience: number;
  skill: string;
}

const employee1: Employee = {
  name: "robiul",
  age: 23,
  experience: 2,
  skill: "web development",
};

// print all elements

let key: keyof Employee;
for (key in employee1) {
  console.log(employee1[key]);
}

// or
type employee1KeyType = keyof Employee;
Object.keys(employee1).forEach((key) => {
  console.log(employee1[key as employee1KeyType]);
});

// or

type employee1KeyType1 = keyof typeof employee1;
Object.keys(employee1).forEach((key) => {
  console.log(employee1[key as employee1KeyType1]);
});

// ----------------------------------- type utility -----------------------

type User = {
  name: string;
  age: number;
};

// ------------ partial type

type User1 = Partial<User>;
// Partial will clone the user type to the user1 but will make all properies of user optional
// that means it won't throw error if we miss to assign value to these properties
const UserObj1: User1 = {
  // no error (no need to provide all values)
  name: "robiul",
};

// user1 is same as the type PartialAlternative below
type PartialAlternative = {
  name?: string;
  age?: number;
};

// --------------- required type (required is oposite of partial)
type User2 = Required<User>;
// Required will clone the user type to the user2 but will make all properies of user required
// that means it will throw error if we miss to assign value to an of these properties

// const UserObj2: User2 = {
//   // error (need to provide all values)
//   name: "robiul",
// };

// UserObj3.name = "hasan" // error

// user1 user2 is same as the type RequiredAlternative below
type RequiredAlternative = {
  name: string;
  age: number;
};

// --------------- readonly type
type User3 = Readonly<User>;
// Required will clone the user type to the user3 but will make all properies of user read only
// that means we can't change the value for any of these properties

const UserObj3: User3 = {
  name: "robiul",
  age: 23,
};

// UserObj3.name = "hasan" // error (can't change any value)

// we can't use  user3 is same as the type ReadonlyAlternative below
type ReadonlyAlternative = {
  readonly name: "robiul";
  readonly age: 23;
};

// --------------------------- few key points ----------------------------------

// never type
// theme mode

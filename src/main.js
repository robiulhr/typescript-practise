var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello world");
console.log("added the watcher in command line");
console.log("updated the source dir and output dir in tsconfig.json file");
// -------------------------------- way to declare variable in typescript
var a = 25;
// a = "a"  // error
var b = "hello world";
// b = 23 // error
// different way to declare variable in typescript
var c = "string type";
// c = 34
// ---------------------------------- define array in typescript
var arr = [1, 3, 5];
var arr1;
// arr1 = ['hello']  // error
arr1 = [1, 3, 5, 6];
// arr1[0] = 'hello'  // error
arr1[0] = 2;
var arr2;
// arr2 = [1,5,6] // error
arr2 = ["hello"];
// define array of array
var counts = [
    [4, 5, 6],
    [7, 8, 9],
];
var countsStr = [
    ["one", "two"],
    ["three", "four"],
];
// --------------------------- define tuple in array (speacial type of array to store different datatypes in an array)
var numbers = [1, 2, "one", "two"];
// numbers[0] = 'one'    // error
// numbers[2] =  1       // error
numbers.push("hello");
console.log(numbers);
// --------------------------------- define object in typescript
var obj1 = {
    name: "robiul",
    age: 23,
};
// obj`.name = 22 // error
var obj2;
obj2 = { name: "robiul", age: 23 };
var objType1 = { name: "robiul", age: 23 };
var obj3 = {
    name: "robiul",
    age: 23,
    getName: function () {
        return this.name;
    },
};
var obj4;
obj4 = {
    name: "robiul",
    age: 23,
    getName: function () {
        return this.name;
    },
};
var parentObj1 = {
    element1: "element1",
    element2: 2,
    element3: true,
    element4: function (num1, num2) { return num1 + num2; },
};
var childObj2 = {
    element1: "element1",
    element2: 2,
    element3: true,
    element4: function (num1, num2) { return num1 + num2; },
    element5: 5,
    element6: "element6",
    element7: false,
    element8: function (num1, num2) { return num1 - num2; },
};
// ------------------------------- Multi Type Multidimensional TypeScript Arrays
// ----------------- array of tuple
var twoWayNumbers = [
    ["one", 1],
    ["two", 2],
    ["three", 3],
];
// ---------------- more complex array
// const school: { class: string; students: { name: string; roll: [string, number] }[] }[] = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];
// alternative
var school = [{ class: "Six", students: [{ name: "rafsan", roll: ["one", 1] }] }];
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
var subNum = function (num1, num2) {
    return num1 - num2;
    // returns number
};
// define function using function Expression
var mulNum = function (num1, num2) {
    return num1 + num2;
    // returns number
};
var address1 = {
    country: "BD",
    zipcode: 2340,
    district: "Kishoreganj",
};
var printAddress = function (address, greetWord, distance) {
    // distance is optional
    console.log("".concat(greetWord, ", Here is the adress: Country: ").concat(address.country, ", District: ").concat(address.district, ", Zipcode: ").concat(address.zipcode));
    distance && console.log("Distance is ".concat(distance));
};
printAddress(address1, "Hello");
var name1 = {
    firstName: "robiul",
    lastName: "hasan",
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    },
    greet: function () {
        console.log("Hello, ".concat(this.firstName));
    },
};
var fullNameOfName1 = name1.getFullName();
console.log("name1's full name is ".concat(fullNameOfName1));
var robiulEduction = {
    Hsc: 2019,
    studing: false,
};
function printStudy(education, congratsWord, congratsCount) {
    if (congratsWord === void 0) { congratsWord = "Congratulations"; }
    // congratsWord has a default value 'Congratulations'
    console.log("I have passed my Hsc exam in ".concat(education.Hsc, ". ").concat(!education.studing ? "currently i am not studing anymore" : "currently i am studing."));
    console.log("".concat(congratsWord, ".").concat(congratsCount ? "congratulate ".concat(congratsCount, " times") : ""));
}
printStudy(robiulEduction);
var object2 = {
    element1: 2,
    element2: "hello",
    element3: true,
};
object2.element1 = 6; // fine to do that
// object2.element3 = 6; // error (can't change readonly values)
// ----------------------------------- rest operator
var addAllNumbers = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (start, curr) {
        return start + curr;
    });
};
// ---------------------------------------- function with object
var getData = function (product) {
    console.log(product.name, product.price, product.url, product.quantity);
};
var getAnotherData = function (product) {
    console.log(product.name, product.price, product.url, product.quantity);
};
var getMoreData = function (product) {
    console.log(product.name, product.price, product.url, product.quantity);
};
// ---------------------------  union type
var d = 2;
// d = 'hello world'    // this is fine
var e = "hi";
e = 2; // this is fine
function greetings(greetWord, count) {
    console.log("Say, ".concat(greetWord, " ").concat(count, " times."));
}
var nums;
nums = [1, 4, 6];
nums = ["hello", "world"];
// nums = [true]   // error
var nums1;
nums1 = [1, 2, 4];
nums1 = ["hello", "world"];
nums1 = [true, false];
function greetUser(user, greetWord, greetCount) {
    console.log("".concat(greetWord, " i am ").concat(user.name, ". I am ").concat(user.age, " years old. My birth date is ").concat(user.dateOfBirth, ". I live in ").concat(user.address));
    console.log("Hello ".concat(user.name, ". greet ").concat(greetCount, " times..."));
}
var robiul = {
    name: "robiul",
    age: 23,
    education: "HSC",
    address: "Bhairab",
    dateOfBirth: "22 january",
};
greetUser(robiul, "hello", 10);
var addNumbers = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 20; }
    var result = num3 ? num1 + num2 + num3 : num1 + num2;
    console.log(result);
    return result;
};
addNumbers(10, 20);
var buyProduct = function (user, product, thanksWord, thanksCount) {
    console.log("I am ".concat(user.name, ". I wanna buy ").concat(product.quantity, "pcs ").concat(product.name, ". My choosen color is ").concat(product.color));
    console.log("".concat(thanksWord, " for your order ").concat(user.name, ". your order will be send soon... give thanks ").concat(thanksCount, " times"));
};
var product = {
    name: "t-shirt",
    size: "L",
    color: "white",
    quantity: 1,
};
buyProduct(robiul, product, "Thanks", 10);
var yObj = {
    value1: "one",
    value2: 2,
    value3: 3,
};
var dObj = {
    value1: "one",
    value2: 2,
    value3: 3,
    value4: "four",
    value5: 5,
};
var Game = /** @class */ (function () {
    function Game(gameName, institute) {
        this.gameName = gameName;
        this.institute = institute;
    }
    return Game;
}());
var Player = /** @class */ (function () {
    function Player(firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
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
    Object.defineProperty(Player.prototype, "getFullName", {
        // Note: TypeScript require optional parameters after required parameters
        // --------------- getter ('get' accessor is not callable using `()` parenthesis)
        // not getFullName() will be getFullName
        get: function () {
            return "".concat(this.firstName, " ").concat(this.middleName ? "".concat(this.middleName, " ") : "").concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Player.prototype.getHeight = function (unit) {
        // unit is optional here
        return unit === "cm" ? this.height * this.inchToCM : this.height;
    };
    Player.prototype.greetPlayer = function () {
        console.log("".concat(this.greetWord, " ").concat(this.getFullName));
    };
    Object.defineProperty(Player.prototype, "setFirstName", {
        // ---------------- setter
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var Tournament = /** @class */ (function (_super) {
    __extends(Tournament, _super);
    function Tournament(tournamentName, year, organizer, gameName, institue) {
        var _this = _super.call(this, gameName, institue) || this;
        _this.tournamentName = tournamentName;
        _this.year = year;
        _this.organizer = organizer;
        return _this;
    }
    return Tournament;
}(Game));
// --------- for cricket
var CricketDetails = { gameName: "Cricket", institute: "ICC" };
var CricketPlayer = /** @class */ (function (_super) {
    __extends(CricketPlayer, _super);
    function CricketPlayer(firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
    lastName, height, // in inch
    weight, age, country, // this value can't be changed
    nationality, playerType, battingPossition, matchPlayed, middleName) {
        var _this = _super.call(this, firstName, // firstName declared as public. So, it can be accessible outside of the class using an object of the class.
        lastName, height, // in inch
        weight, age, country, // this value can't be changed
        nationality, middleName) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.height = height;
        _this.weight = weight;
        _this.age = age;
        _this.country = country;
        _this.nationality = nationality;
        _this.playerType = playerType;
        _this.battingPossition = battingPossition;
        _this.matchPlayed = matchPlayed;
        _this.middleName = middleName;
        var playerInstance = new Game(CricketDetails.gameName, CricketDetails.institute);
        // Copy properties from Game and Player instances to CricketPlayer
        Object.assign(_this, playerInstance);
        return _this;
    }
    return CricketPlayer;
}(Player));
var player1 = new CricketPlayer("robiul", "hasan", 64, 56, 23, "BD", "Bangladeshi", "Batsman", "Middle Order", 10);
var CricketTournament = new Tournament("CWC", 2023, "India", CricketDetails.gameName, CricketDetails.institute);
console.log(CricketTournament, player1);
console.log("full name", player1.getFullName);
player1.greetPlayer();
// --------------------------------- type assertion
// const btn = document.querySelector("button");
// btn.onclick = function () {        // error : 'btn' is possibly 'null'.
//    console.log("hello world");
// };
// ----------- solution
var btn = document.querySelector("button");
btn.onclick = function () {
    console.log("hello world");
};
// --------------------------- few key points ----------------------------------
// never type
// theme mode

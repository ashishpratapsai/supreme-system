//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ashish",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof score);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// to run this file use the command : node 01_basics/datatype-summary.js in terminal

// stack(primitive) vs heap memory(non-primitive) 
let myYoutubename = "elevatewithashish"

let anothername = myYoutubename
anothername = "Automatewithashish"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne
userTwo.email = "ashish@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
const accountId = 14453
let accountEmail = "ashishps@gmail.com"
var accountPassword = "mySecretPassword"
accountCity = "Bangalore"
let accountState;

// accountId = 2 // not allowed




accountEmail = "ap@gmqail.ccom"
accountPassword = "myNewPassword"
accountCity = "New York"

console.log(accountId);

/*
prefer not to use var because of its function scope
use let and const because of their block scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

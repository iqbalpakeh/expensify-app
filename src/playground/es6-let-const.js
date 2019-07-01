/**
 * Start script with:
 *  $ babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch
 */

var nameVar = "Andrew";
nameVar = "Joe"; // can reassign
var nameVar = "Mike"; // can define another similar name variable and this could lead to hard to debug error!
console.log("nameVar", nameVar);

let nameLet = "Julie";
nameLet = "Sophie"; // can reassign!!
// let nameLet = "Sophie"; --> can't redifine let!!
console.log("nameLet", nameLet);

const nameConst = "Frank";
// nameConst = "John"; --> can't reassign!!
// const nameConst = "John" --> can't redefine const!!
console.log("nameConst", nameConst);

function getPetName() {
	var petName = "Hal";
	return petName;
}
console.log("petName", getPetName());
// console.log("petName", petName); --> petName is not defined outside its function scope! Similar to let and const!!

// --------------- BLOCK SCOPING --------------------

var fullName = "Andrew Mead";

if (fullName) {
	var firstName = fullName.split(" ")[0];
	console.log("firstName", firstName);
}
console.log("firstName", firstName); // can access var inside IF block! But not for let and const!!

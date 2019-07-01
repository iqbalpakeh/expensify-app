// ------------------------------------------------------------------
// Class definition
// ------------------------------------------------------------------

class Person {
	constructor(name = "Anonymous", age = 0) {
		this.name = name;
		this.age = age;
	}

	getGreeting() {
		return `Hi. I am ${this.name}!`; // ES6 template string
	}

	getDescription() {
		return `${this.name} is ${this.age} year(s) old.`;
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}

	hasMajor() {
		return !!this.major;
	}

	getDescription() {
		let description = super.getDescription();
		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveler extends Person {
	constructor(name, age, homeLocation) {
		super(name, age);
		this.homeLocation = homeLocation;
	}

	getGreeting() {
		let greeting = super.getGreeting();
		if (this.homeLocation) {
			greeting += ` I'm visiting from ${this.homeLocation}`;
		}
		return greeting;
	}
}

// ------------------------------------------------------------------
// Class usage
// ------------------------------------------------------------------

const me = new Traveler("Iqbal Pakeh", 34, "Singapore");
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, "Nowhere");
console.log(other.getGreeting());

// const me = new Student("Iqbal Pakeh", 34, "Electrical Engineering");
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());

// const me = new Person("Iqbal Pakeh", 34);
// console.log(me.getGreeting());
// console.log(me.getDescription());

// const other = new Person();
// console.log(other.getGreeting());
// console.log(other.getDescription());

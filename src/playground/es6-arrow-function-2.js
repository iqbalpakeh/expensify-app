// arguments objects -> no longer bound with arrow function

const add = function(a, b) {
	console.log(arguments); // can't access arguments with arrow function!!
	return a + b;
};
console.log(add(55, 1));

// this keyword -> no longer bound with arrow function

const user = {
	name: "Andrew",
	cities: ["Philadelphia", "New York", "Dublin"],

	// ES6 syntax
	printPlacesLived() {
		return this.cities.map(city => this.name + " has lived in " + city);
	}

	// ES5 syntax
	// printPlacesLived: function() {
	// 	console.log(this.name);
	// 	console.log(this.cities);

	// 	// this.cities.forEach(function(city) {
	// 	// 	console.log(this.name + " has lived in " + city); // RUNTIME ERROR: this.name is undefined
	// 	// });

	// 	this.cities.forEach(city => {
	// 		console.log(this.name + " has lived in " + city); // OK! this.name is accesible
	// 		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// 		// IMPORTANT!
	// 		// Arrow function doesn't define its own "this" scope.
	// 		// Thus, its scope is coming from its parent context.!!
	// 		// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	// 	});
	// }
};

console.log(user.printPlacesLived());

// CHALLENGE AREA

const multiplier = {
	numbers: [1, 2, 3],
	multiplyBy: 2,
	multiply() {
		return this.numbers.map(number => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());

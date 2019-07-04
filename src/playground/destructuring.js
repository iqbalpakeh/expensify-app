const person = {
	name: "Andrew",
	age: 26,
	location: {
		city: "Medan",
		temp: 92
	}
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temprature } = person.location;
if (city && temprature) {
	console.log(`It's ${temprature} in ${city}`);
}

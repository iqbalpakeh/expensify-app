const square = function(x) {
	return x * x;
};

const squareArrow = x => {
	return x * x;
};

const squareArrowShort = x => x * x;

console.log(square(8));
console.log(squareArrow(9));
console.log(squareArrowShort(10));

// Arrow function is always anonymous and must be assign to "variable" to access it

const getFirstName = fullName => fullName.split(" ")[0];
console.log(getFirstName("Mike Pens"));

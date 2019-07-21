// to run jest from console:
//    $ yarn test -- --watch

const add = (a, b) => a + b;

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
	const result = add(3, 4);
	expect(result).toBe(7);
});

test("should generate greeting from name", () => {
	const result = generateGreeting("Iqbal");
	expect(result).toBe("Hello Iqbal!");
});

test("should generate greeting from no name", () => {
	const result = generateGreeting();
	expect(result).toBe("Hello Anonymous!");
});

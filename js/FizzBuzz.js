function fizzBuzz(n) {
	Array.from({ length: n + 1 }, (val, idx) => idx).forEach(val => {
		if (val > 0) {
			if (val % 3 === 0 && val % 5 === 0) {
				console.log('FizzBuzz');
			} else if (val % 3 === 0) {
				console.log('Fizz');
			} else if (val % 5 === 0) {
				console.log('Buzz');
			} else {
				console.log(val);
			}
		}
	});
}

// console.log(fizzBuzz(15));

const { x: { bar = 34 || 'bar', y, y: [, ...foo] } = { y: [1, 2, 3] } } = { bar: 12 };
// console.log(foo,bar)

const prop = Symbol();

const obj = {
	bar() {},
	[prop]() {},
};

// console.log(Object.keys(obj))

class a {
	get brands() {
		return ['Doc', 'Live', 'Oranum', 'Apple'];
	}

	constructor() {
		return this;
	}
}

function print() {
	return Array.from(new a()).join(',');
}
// console.log(print())


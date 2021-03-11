// https://www.youtube.com/watch?v=OOC-ypVnHAY&list=PL7pEw9n3GkoWn5TcqAdmSzXcvC3d_tfAh&index=12

/* PRINT ONLY THE VALUES OF THE ARRAY*/
let x = { a: 1, b: 2 };

// METHOD 1:-
var output = Object.values(x);

console.log('METHOD 1', Array.isArray(output), ':::', output);
// METHOD 2
var output = [];

for (const [key, val] of Object.entries(x)) {
	console.log(key, ':::', val);
	output.push(val);
}

console.log('METHOD 2', Array.isArray(output), ':::', output);

// METHOD3:-

var output = [];

for (let i in x) {
	output.push(x[i]);
}

console.log('METHOD 3', Array.isArray(output), ':::', output);

/* REVERSE OF A STRING*/

var input = 'aryan';

// METHOD1:-

console.log(`METHOD1 :- ${input.split('').reverse().join('')}`);

// METHOD 2:-

var output = '';
for (let i = input.length - 1; i >= 0; i--) {
	output += input[i];
}

console.log(`METHOD2 :- ${output}`);

/* MAKE CHANGE IN INPUT OBJECT SO THAT input.getA().getB() PRINTS VALUE OF A
var input = {
	a: 11,
	b: 2,
	getA() {
		console.log(`${this.a}`);
	},

	getB() {
		console.log(`${this.a}`);
	},
};

*/

// METHOD 1

var input = {
	a: 11,
	b: 2,
	getA() {
		return {
			getB: () => {
				console.log(`${this.a}`);
			},
		};
	},
};

console.log(`METHOD 1:- ${JSON.stringify(input.getA().getB())}`);

// METHOD 2

var input = {
	a: 11,
	b: 2,
	getA() {
		console.log(`${this.a}`);
		return this; // THIS POINTS THE SAME OBJECT INPUT HERE.
	},

	getB() {
		console.log(`${this.a}`);
	},
};

// input.getA() WILL BE SAME AS input. So input.getA().getB() will be same as input.getB();

console.log(`METHOD 2:- ${JSON.stringify(input.getA().getB())}`);

/* ARRAY SHOULD HAVE A PRINT METHOD WE SHOULD PRINT THE ELEMENTS OF THE ARRAY AND ITS INDEX*/

var input1 = new MyArray([11, 22, 33]);
var input2 = new MyArray(['aryan', 'sim', 'ryan']);

// METHOD 1:-

function MyArray(arr) {
	this.arr = arr;
}
MyArray.prototype.print = function () {
	return this.arr.map((_, idx) => ({
		arrayElem: _,
		index: idx,
	}));
};

console.log(`METHOD1 for input1:- ${JSON.stringify(input1.print(), null, 4)}`);
console.log(`METHOD1 for input1:- ${JSON.stringify(input2.print(), null, 4)}`);


// METHOD2:-

Array.prototype.print=()=>{
    this.forEach((elem,idx)=>console.log({[idx]:elem}))
}


console.log(`METHOD2 for input1:- ${JSON.stringify(input1.print(), null, 4)}`);
console.log(`METHOD2 for input2:- ${JSON.stringify(input2.print(), null, 4)}`);

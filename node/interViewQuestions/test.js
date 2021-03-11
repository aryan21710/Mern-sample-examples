import { inherits } from "util";

// function Foo() {}
// function Bar() {}
// Bar.prototype = Object.create(Foo.prototype)
// let bar = new Bar()
// let foo = new Foo()
// console.log(Bar.prototype.isPrototypeOf(foo))
// console.log(Bar.prototype.isPrototypeOf(bar))
// console.log(Bar.prototype.isPrototypeOf(bar))

// function list() {
//     return [].slice.call(arguments)
//  }

//  var a=list.bind(null,37);
//  var b=a();
//  console.log(b)

//  var x="global"
//  var y=function() {
//      var x="global"

//      console.log(this.x)
//  }
//  y()
//  y.bind(this)
//  y()
//  new y();

// let a={name: 'aryan', lname: "sharma"}

// for (let i of a) {
//     console.log(`${i} and ${a[i]}`)
// }

// var a={
//     comp: 'xyz'

// }

// var b=Object.create(a)
// console.log(b)
// delete b.comp
// console.log(b.comp)

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };

//   const me = Object.create(person);
//   console.log(`me ${JSON.stringify(me)}`)

//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // inherited properties can be overwritten

//   me.printIntroduction();

// let cat = {
// 	name: 'Bertie',
// 	breed: 'Cymric',
// 	color: 'white',
// 	greeting: function () {
// 		console.log('Meow!');
//     }

// };

// // Put your code here
// console.log(cat.greeting());
// const catName = cat['name'];
// console.log(`catName is ${catName}`);
// cat.color = 'black';
// Object.prototype.toString = function () {
// 	console.log({ name: this.name, breed: this.breed, color: this.color})
// };
// console.log(`cat is ${cat}`);

// function Person(first, last, age, gender, interests) {
// 	this.name = {
// 		first: first,
// 		last: last,
// 	};
// 	this.age = age;
// 	this.gender = gender;
//     this.interests = interests;
//     this.proNoun=this.gender==="M" ? "HE" : "SHE";
// 	this.bio = function () {

// 		console.log(
// 			this.name.first +
// 				' ' +
// 				this.name.last +
// 				' is ' +
// 				this.age +
// 				`years old.  ${this.proNoun} likes ` +
// 				this.interests+
// 				'.'
// 		);
// 	};
// 	this.greeting = function () {
// 		console.lg("Hi! I'm " + this.name.first + '.');
// 	};
// }

// const me = new Person('aryan', 'sharma', 41, 'M', ['music', 'tennis', 'superbikes']);

// // const her = new Person('sim', 'sharma', 31, 'F', ['music', 'cooking', 'cosmetics']);

// const her=Object.create(me)
// console.log(me.bio())
// console.log(her.bio())

// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//     this.calcPerimeter = function() {
//         this.periMeter=this.sides * this.sideLength;
//         console.log(`THE PERIMETER OF ${this.name} IS ${this.periMeter}`)
//     }
//   }

class Shape {
	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}
	calcPerimeter() {
		const periMeter = this.sides * this.sideLength;
		console.log(`THE PERIMETER OF ${this.name} IS ${periMeter}`);
	}
}



// class Square extends Shape {
//     constructor(name, sides, sideLength) {
//         super(name, sides, sideLength)
//     }

//     calcArea() {
//         console.log(`THE AREA FOR ${this.name} IS ${this.sideLength*this.sideLength}`)
//     }
// }

const square = new Shape('square', 4, 10);
console.log(square.calcPerimeter());
const triangle = new Shape('triangle', 3, 5);
console.log(triangle.calcPerimeter());



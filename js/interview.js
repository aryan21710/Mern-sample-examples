// (function() {
// 	Array.from({ length: 101 }, (val, idx) => idx).forEach(number => {
// 		if (number % 3 === 0 && number % 5 === 0) {
// 			console.log('fizzbuzz for number:-', number);
// 		} else if (number % 5 === 0) {
// 			console.log('buzz for number:-', number);
// 		} else if (number % 3 === 0) {
// 			console.log('fizz for number:-', number);
// 		}
// 	});
// })()

// FOLLOWING CODE WILL ALLOW USER TO ENTER INPUT FOR ONE NUMBER.
// let number = 0;
// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// readline.question('Enter A number:-', input => {
// 	console.log(`Number Entered By User is:- ${input}!`);
// 	number = Number(input) ? input : null;
// 	console.log('FINAL OUTPUT', printNumbers(number));
// 	readline.close();
// });

/* FIND GREATEST COMMON DIVISOR OF 2 NUMBERS
4,6 => 2
2,3 => 1
 */

// 4:- 1,2,4 && 6:- 6,3,2,1:- {4:[], 6:[]}
const divisor = (...args) => {
	let temp = [];
	args.forEach(n => {
		let temp1 = [];
		Array.from({ length: n + 1 }, (val, idx) => idx).forEach(_ => {
			if (_ > 0) {
				temp1 = n % _ === 0 ? [...temp1, _] : [...temp1];
			}
		});
		temp.push(temp1);
	});

	let count = 0;
	for (let i = 0; i < temp[0].length; i++) {
		if (temp[1].includes(temp[0][i])) {
			if (temp[0][i] > count) {
				count = temp[0][i];
			}
		}
	}

	console.log('finaloutput is ', count);
};

// console.log(divisor(5, 15));

/* n kids are sitting in a circle. 
k toys available to distribute. i position to start from . 
which kid will get the last toy
n is 3,k is 5,i is 1 => 2nd kid will be getting the last toy
*/

const lastKidTOGetTheToy = (n, k, i) => {
	const count = 0;
	if (n > 0 && k > 0) {
		for (let x = k; x > 0; x--) {
			for (let y = i; y <= n; y++) {
				if (count > 0) {
					i = 0;
				}
				count++;
			}
		}
	}
};

// console.log(lastKidTOGetTheToy(3,5,1))

const printValuesFromObjInArray = obj => Object.values(obj);

// console.log(printValuesFromObjInArray({a:1, b:2, c:[1,2,3]}))

const revOfString = s => {
	let output = '';
	for (let i = s.length - 1; i >= 0; i--) {
		output += s[i];
	}
	return output;
};
var revOfStringUsingRecursion = function(string) {
	if (string === '') {
		return '';
	} else {
		// recursive function is calling on a sub-problem
		return revOfStringUsingRecursion(string.substr(1)) + string.charAt(0);
	}
};

// console.log(revOfStringUsingRecursion('Aryan'))

const obj = {
	a: 1,
	b: 2,
	getA() {
		console.log(this.a);
		return {
			getB: () => {
				console.log(this.b);
			},
		};
	},
};

// console.log(obj.getA().getB());


Array.prototype.myPrint=function() {
    let output="";
    this.forEach((_,idx)=>{
        output+=idx===this.length-1 ? _ : `${_},`
    })
    return output;
}

Array.prototype.myUcase = function() {
    console.log('output of fruits.myUcase() is following');
    for (i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
      console.log(this[i]);
    }
  };

const a=[11,22,33,44];
// console.log('a.print()', a.myPrint());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myUcase();

Object.prototype.showValues=function() {
    return Object.values(this)
}

var newObj={name: 'aryan', lname: 'sharma'};
// console.log('newObj',newObj.showValues())


/* Deep cloning Example.
clone newObj into new Obj in such a way that cloneobj should
 have c value as 55 but the newobj should retain c as 1
following wont work:- 
1] const n=Object.assign(newObj) // will mutate newObj
2] const n={...newObj}
 n.a.b.c=55 // will mutate newObj
*/
var newObj={
    a: {
        b: {
            c: 1
        }
    }
}
console.log('newObj', newObj);
var cloneOfNewobj={...newObj, a: {...newObj.a , b : { c : 55}}};
console.log('cloneOfNewobj', cloneOfNewobj.a.b.c);
console.log('newObj', newObj.a.b.c);


/* output should be [
  1, 2, 2,  5,   5,
  7, 7, 9, 12, 100
] */

var a1=[1,2,5,7,9];
var b1=[2,5,7,12,100];


var c1=[...a1, ...b1].sort(function(a,b){return a-b});
// console.log(c1)



function ensure(value) {
    // Your code goes here
    return arguments.length === 0 ?  new Error("ERROR:- NO ARGUMENTS USED TO CALL THE FUNCTION"):  value;
  }
  
  try {
    console.log(ensure(5));
  } catch(err) {
    console.log(err);
  }
const data = require('../js/DATA/arrReduceInpData');

const arr = [90, 80, 70, 10, 20, 30, 40, 50, 60];
var myObj = {};

var output = arr.reduce((accumulator, element, idx) => {
	// [idx] is Object computed property style where anything inside an []
	// can be an expression which becomes a key for the object. If you dont return anything inside
	// array.reduce then after first iteration (first iteration the value will be {})
	// the value of acc will be undefined always.
	return { ...accumulator, [idx]: element };
}, {});

console.log(`output ${JSON.stringify(output)}`);
const students = [
	{
		userid: 'stevens',
		name: 'stevens',
		passFail: true,
	},
	{
		userid: 'adam',
		name: 'adam',
		passFail: false,
	},
	{
		userid: 'gloria',
		name: 'gloria',
		passFail: true,
	},
	{
		userid: 'jane',
		name: 'jane',
		passFail: true,
	},
];

var myObj = {};
var output = students.reduce((acc, elem) => {
	return { ...acc, [elem.userid]: elem };
}, {});

console.log(`output ${JSON.stringify(output, null, 4)}`);
console.log(output.stevens);

let flattened = [
	[0, 1],
	[2, 3],
	[4, 5],
].reduce((acc, elem) => {
	return [...acc, ...elem];
}, []);

console.log(`is flattened an Array:- ${Array.isArray(flattened)} it contains ${flattened}`);

let names = ['Alice', 'Bob', 'Tiff', 'Alice', 'Bruce', 'Alice', 'Alice', 'Bob', 'Bob'];

const instanceOfValuesInNamesObj = names.reduce((acc, elem) => {
	return Object.keys(acc).includes(elem) ? { ...acc, [elem]: Number(acc[elem]) + 1 } : { ...acc, [elem]: 1 };
}, {});

console.log(`instanceOfValuesInNamesObj ${JSON.stringify(instanceOfValuesInNamesObj, null, 4)}`);

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

const nonDupItemsInArray = myArray.reduce((acc, elem) => {
	// On Every Iteration of array.reduce, the loop needs to return something. So following will be wrong
	// return acc.includes(elem) ? '' : [...acc,elem]
	return acc.includes(elem) ? [...acc] : [...acc, elem];
}, []);

console.log(`nonDupItemsInArray ${nonDupItemsInArray}`);

// Replace map and filter with array.reduce
var numbers = [-5, 6, 2, 0];

var doublePositiveNumbers = numbers.reduce((acc, elem) => {
	return elem > 0 ? [...acc, elem * 2] : [...acc];
}, []);

console.log(`doublePositiveNumbers using reduce ${doublePositiveNumbers}`);

// The above code can be written using filter and map as follows

var doublePositiveNumbers = numbers.filter((elem) => elem > 0).map((elem) => elem * 2);

console.log(`doublePositiveNumbers using filter & map ${doublePositiveNumbers}`);

// THE BELOW CODE WILL CONVERT THE ARRAY OF OBJECT INTO A SINGLE OBJECT.
const myarr = [{ name: 'aryan' }, { lname: 'sharma' }, { age: 45 }];
const myOutput = myarr.reduce((acc, elem) => {
	console.log(`acc ${JSON.stringify(acc)}, elem ${JSON.stringify(elem)}`);
	return { ...acc, ...elem };
}, {});

console.log(`myOutput ${JSON.stringify(myOutput)} :: ${Array.isArray(myOutput)}`);

const someData = [
	{ id: 40, name: 'aryan', age: 40 },
	{ id: 30, name: 'sim', age: 30 },
	{ id: 10, name: 'ryan', age: 10 },
];

/*
CONVERT THE ABOVE ARRAY DATA STRUCTURE INTO AN OBJ , WHERE U CAN REFER THE OBJECT WITH THE KEY POINTING TO ITS ID
 OUTPUT SHOULD BE IN FOLLOWING FORMAT  
 {"40" : { id: 40, name: 'aryan', age: 40 },
"30" :	{ id: 30, name: 'sim', age: 30 },
"10" :	{ id: 10, name: 'ryan', age: 10 }}
*/

/*
EXPLANATION:- acc is the intial value which is set to  an empty {} here. 
acc is also the data type which you want to return . 
it can be a number or an array unlike map or filter which always returns an array.
here u are returning an obj that is why acc needs to be init to an {}.
objElem will be holding the value of every element in the array. just like _
in case of arr.map((_,idx)=>_);
imp note :- acc needs to be returned as the last statement of array.reduce . 
Reason being we need the new initial value in every next iteration which is set by return acc
});
*/

const someDataOutput = someData.reduce((acc, objElem) => {
	acc[objElem.id] = { ...objElem };
	return acc;
}, {});
console.log(`OUTPUT IS ${JSON.stringify(someDataOutput, null, 4)}`);

const someNewArr = [111, 222, 333, 444];

const someNewArrOutput = someNewArr.reduce((acc, _, idx) => {
	const newIdx = someNewArr.length - 1 - idx;
	acc[newIdx] = _;
	return acc;
}, []);

console.log(`original Array is ${someNewArr}`);
console.log(`reverse Of AnArray is ${someNewArrOutput}`);

// const arrReduceOutput = data.arrReduceInpData.reduce((acc, _, idx) => {
// 	let count=0;
// 	if (Object.keys(acc).includes(_.via)) {
// 		acc[_.via]=acc[_.via]+1;
// 	} else {
// 		acc[_.via]=count;
// 	}
// 	return acc;
// }, {})

// let temp=[]
// for (let i in arrReduceOutput) {
// 	let obj={}
// 	obj["via"]=i;
// 	obj["viaCount"]=arrReduceOutput[i]
// 	temp=[...temp,obj]
// }

const newData = data.newData[0].via;
console.log(`newData ${newData.length}`);
let newOutput = [];
let temp=[]

for (let i = 0; i <= newData.length - 1; i++) {
	let count = 1;
	for (let j = i + 1; j <= newData.length - 1; j++) {
		newData[j]===newData[i] && !temp.includes(newData[i]) && count++;
	}
	if (!temp.includes(newData[i])) {
		temp.push(newData[i])
		newOutput=[...newOutput,{via: newData[i],viaCount: count}]
	}
}

console.log(`newOutput is ${JSON.stringify(newOutput, null, 4)}`);

/*
[{
    via: "NORMAL",
    viaCount: 8

}]*/

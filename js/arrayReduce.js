const arr=[90,80,70,10,20,30,40,50,60]
var myObj={}

var output=arr.reduce((accumulator,element,idx)=>{
    // [idx] is Object computed property style where anything inside an []
    // can be an expression which becomes a key for the object. If you dont return anything inside
    // array.reduce then after first iteration (first iteration the value will be {})
    // the value of acc will be undefined always.
    return {...accumulator,[idx]:element}
},{})

console.log(`output ${JSON.stringify(output)}`)
const students=[
    {
        userid: "stevens",
        name: "stevens",
        passFail: true
    },
    {
        userid: "adam",
        name: "adam",
        passFail: false
    },
    {
        userid: "gloria",
        name: "gloria",
        passFail: true
    },
    {
        userid: "jane",
        name: "jane",
        passFail: true
    }
]

var myObj={} 
var output=students.reduce((acc,elem)=>{
    return {...acc,[elem.userid]:elem}
},{})

console.log(`output ${JSON.stringify(output,null,4)}`)
console.log(output.stevens)



let flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc,elem)=>{
    return [...acc,...elem]
},[])

console.log(`is flattened an Array:- ${Array.isArray(flattened)} it contains ${flattened}`)


let names = ['Alice', 'Bob', 'Tiff', 'Alice','Bruce', 'Alice','Alice','Bob','Bob']

const instanceOfValuesInNamesObj=names.reduce((acc,elem)=>{
    return Object.keys(acc).includes(elem) 
    ? {...acc,[elem]:Number(acc[elem])+1}
    : {...acc,[elem]:1}
},{})

console.log(`instanceOfValuesInNamesObj ${JSON.stringify(instanceOfValuesInNamesObj,null,4)}`)


let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']

const nonDupItemsInArray=myArray.reduce((acc,elem)=>{
    // On Every Iteration of array.reduce, the loop needs to return something. So following will be wrong
    // return acc.includes(elem) ? '' : [...acc,elem]
    return acc.includes(elem) ? [...acc] : [...acc,elem]
},[])

console.log(`nonDupItemsInArray ${nonDupItemsInArray}`)


// Replace map and filter with array.reduce
var numbers = [-5, 6, 2, 0,];

var doublePositiveNumbers=numbers.reduce((acc,elem)=>{
    return elem > 0 ? [...acc,elem*2] : [...acc]
},[])

console.log(`doublePositiveNumbers using reduce ${doublePositiveNumbers}`)

// The above code can be written using filter and map as follows

var doublePositiveNumbers=numbers.filter((elem)=>elem > 0).map((elem)=>elem*2)

console.log(`doublePositiveNumbers using filter & map ${doublePositiveNumbers}`)

// THE BELOW CODE WILL CONVERT THE ARRAY OF OBJECT INTO A SINGLE OBJECT.
const myarr=[{name:'aryan'},{lname: "sharma"},{age: 45}]
const myOutput=myarr.reduce((acc,elem)=>{
    console.log(`acc ${JSON.stringify(acc)}, elem ${JSON.stringify(elem)}`);
    return {...acc,...elem}
},{})

console.log(`myOutput ${JSON.stringify(myOutput)} :: ${Array.isArray(myOutput)}`)

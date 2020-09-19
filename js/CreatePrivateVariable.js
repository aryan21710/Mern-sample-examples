/*

In below example we need to create a private variable whose value cant be seen from outside world. 
We are hiding the value of privateVariable at any cost from outside world;
We create a variable that lives inside the local scope of a function.
The first console.log will print the "function() {return  num1+privateVariable}"" only
it wont print the statement "const privateVariable=10"; So no one can actually see the value of privateVariable.
Also the value of  num1+privateVariable wont be printed. 
To print the actual value we need to use the second console.log

*/
const add = (num1) => {
  const privateVariable = 10;

  return function () {
    return num1+privateVariable;
  };
};

const privateVar = add(10);
console.log(`private var is ${privateVar}`);
console.log(`value  of private var is ${privateVar()}`);

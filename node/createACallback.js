// here callback is just a name of the function. You can also call callback function as add function and
// everything will work as expected.
const callback=(arrayOfNum)=>arrayOfNum.reduce((acc,curr,idx)=>{
    acc=acc+curr;
    return acc;
})



const compute = (arrayOfNum,callback) => {
  if (Array.isArray(arrayOfNum)) {
    const areAllNumber = arrayOfNum.every(
      (num) => typeof num === "number" && !isNaN(num)
    );
    return areAllNumber ? callback(arrayOfNum) : NaN;
  } else {
    return NaN;
  }
};

const output = compute([12, 12, 14], callback);
console.log(`output is ${output}`)



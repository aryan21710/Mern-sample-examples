/* REVERSE OF AN ARRAY USING RECURSION AND NO LOOP*/

const chalk=require('chalk');
const log=console.log;

const someNewArr = [111, 222, 333, 444];
let reverseArray = [];
const recursionToRevAnArray = (someNewArr) => {
	if (someNewArr.length > 0) {
		const newArr = [...someNewArr];
		reverseArray = [...reverseArray, newArr[newArr.length - 1]];
		newArr.splice(newArr.length - 1, 1);
		return recursionToRevAnArray(newArr);
	} else {
		console.log(`reverseArray ${chalk.red(reverseArray)}`)
		return reverseArray
	}
};
const recursiveOutput=recursionToRevAnArray(someNewArr)

log(`recursiveOutput:- ${chalk.blue(recursiveOutput)}`);


const recursionToCountDown=(num)=>{
    if (num >= 0) {
        log(`${num}`)
        return recursionToCountDown(num-1)
    } 
}

log(`recursionToCountDown:- ${recursionToCountDown(10)}`);

let output=1;
const recursionFactorial=(num)=>{
    if (num > 0) {
        output*=num;
        num--;
        log(`num ${num}`)
        return recursionFactorial(num)
    } else {
        log(`factorial of a number using recursion:- ${output}`);

    }
}

recursionFactorial(4)

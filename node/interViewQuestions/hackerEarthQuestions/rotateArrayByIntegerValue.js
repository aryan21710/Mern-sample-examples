// https://www.hackerearth.com/practice/codemonk/

const rotateArray = (input) => {
	let lines = input
		.split(/[\n\r]+/)
	lines.shift();
	lines=lines.join(' ').trim('').split(' ')
	let i = 0;
	while (i <= lines.length - 1) {
		const firstIndex = i + 2;
        const rotateBy = lines.slice(i + 1, firstIndex);
		const lastIndex = firstIndex + lines[i] === lines.length ? lines.length : parseInt(firstIndex) + parseInt(lines[i]);
		const splicedArr = lines.slice(firstIndex, lastIndex);
		const _ = splicedArr.splice(splicedArr.length - rotateBy, rotateBy);
		i = lastIndex;
		console.log(`output:- ${_.concat(splicedArr).join(' ')}`);
	}
};


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    console.log(`input ${input}`)
   rotateArray(input) 
}


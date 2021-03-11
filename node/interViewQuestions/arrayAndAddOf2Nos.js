const findTwoSum = (numbers, sum = undefined) => {
	let output = [];
	if (sum) {
		for (let i = 0; i <= numbers.length - 1; i++) {
			for (let j = i + 1; j <= numbers.length - 1; j++) {
				if (numbers[i] + numbers[j] === sum) {
					output = output.concat(i, j);
					return output;
				}
			}
		}
	}

	return null;
};
console.time('test');
const indices = findTwoSum([3, 1, 5, 7, 5, 9], 12);
console.log(indices);
console.timeEnd('test');

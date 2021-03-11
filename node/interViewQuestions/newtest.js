const output = [];
const reversOfAStr = (arr, n) => {
	if (n === 0) {
		return [];
	}
	return [arr[n - 1]].concat(reversOfAStr(arr, --n));
};

const arr = [11, 22, 33];

console.log(`reversOfAStr is ${reversOfAStr(arr, arr.length)}`);

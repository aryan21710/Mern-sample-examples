const splitArr = (arr) => {
	const oddArr = [];
	const evenArr = [];

	arr.map((_) => {
		if (_ % 2 === 0) {
			evenArr.push(_);
		} else {
			oddArr.push(_);
		}
	});

	return {
		oddArr,
		evenArr,
	};
};

const myArr = [1, 2, 3, 4, 5, 6];
console.log(`originalArr is ${myArr}`);
console.log(`oddArr is ${splitArr(myArr).oddArr}`);
console.log(`evenArr is ${splitArr(myArr).evenArr}`);

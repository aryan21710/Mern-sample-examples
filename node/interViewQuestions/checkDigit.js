function createCheckDigit(membershipId) {
	const addOfStringConvertedToNumbers = (input, sumOfAllNumbers = 0) => {
		String(input)
			.split('')
			.forEach((_) => (sumOfAllNumbers += parseInt(_)));
		console.log(` for ${input} the output is ${sumOfAllNumbers}`);
		return sumOfAllNumbers;
	};
	if (membershipId.length > 0 && typeof membershipId === 'string') {
		let output = addOfStringConvertedToNumbers(membershipId);
		while (output > 10) {
			output = addOfStringConvertedToNumbers(output);
		}
		return output;
	}
}

console.log(createCheckDigit('11199'));

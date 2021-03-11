function ensure(value) {
	if (arguments.length === 0 || typeof value==='undefined') {
		throw Error('ERROR:- INVALID ARGUMENTS ARE SENT');
	}
	return value;
}

try {
	console.log(ensure());
} catch (err) {
	console.log(`err is ${err}`);
}


function removeProperty(obj, prop) {
	if (Object.keys(obj).includes(prop)) {
        delete obj[prop];
		return true;
	}
	return false;
}

const details = { name: 'aryan', age: 41, lname: 'sharma' };
console.log(removeProperty(details, 'name'));

const a = [11, 22, 33, 22, 44, 11, 55, 777];

// Method 1:-
// const b=Array.from(new Set(a))
// console.log(typeof b + ';;;' + b);

// METHOD 2:-

var b = [];
a.forEach((_) => !b.includes(_) && b.push(_));
console.log('METHOD 2;' + b);


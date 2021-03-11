const addWithoutCurrying = function (a, b, c) {
  return a + b + c;
};

console.log(`addWithoutCurrying  is ${addWithoutCurrying(10, 20, 30)}`);

const curriedFunc = (num1) => (num2) => (num3) => (num4) =>
  num1 + num2 + num3 + num4;

const addOffset = curriedFunc(50)(30)(20);
const addWithCurrying = addOffset(40);

console.log(`addWithCurrying  is ${addWithCurrying}`);

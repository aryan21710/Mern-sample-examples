const numOuter = 4;
const outer = () => {
  let numInner = 2;
  const inner = () => {
    const innerMost = (arg) => {
        
      numInner = 5;
      console.log(`numInner in block scope is ${numInner}+${arg}+${numOuter}`);
    };

    if (true) {
      console.log(`numOuter  is ${numOuter}`);
      console.log(`numInner  is ${numInner}`);
      innerMost(10);
    }
  };
  inner();
};
outer();

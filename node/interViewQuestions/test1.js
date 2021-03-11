// function solution(n) {
//     let binOut=(n>>>0).toString(2)
//     let noOfZero=n-binOut.length;
//     binOut=Array(noOfZero).fill(0).concat(binOut.split('')).join('');
//     return binOut
// }




// console.log(solution(12))

// 10 1010 4
// 00000001010

function getSubArrays(arr){
  if (arr.length === 1) return [arr];
  else {
      subarr = getSubArrays(arr.slice(1));
      console.log(subarr)
  	return subarr.concat([...new Set(subarr.map(e => e.concat(arr[0])), [[arr[0]]])])
  }
}

console.log(JSON.stringify(getSubArrays([3,3,1])));
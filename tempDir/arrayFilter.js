const inpArr=Array.from({length: 10}, (v,i)=>i)

console.log(`input array is ${inpArr}`)
const outArr=inpArr.filter((elm)=>elm%2==0)
console.log(`output array is ${outArr}`)

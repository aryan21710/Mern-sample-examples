// https://www.hackerearth.com/problem/algorithm/copying-code-3-b70a931b/


const copyCode=(noOfLines, destLine)=>{
    const result=Math.min(copyCodeUsingCopyAndPaste(noOfLines, destLine),copyCodeUsingMovingUp(noOfLines, destLine))
    console.log(`${result}`);
}
  

const copyCodeUsingCopyAndPaste = (noOfLines, destLine) => (noOfLines-destLine)+2*2
const copyCodeUsingMovingUp = (noOfLines, destLine) => (noOfLines-destLine)*2

copyCode(5,1)


// console.log(`\ncodeCopiedUsingCopyAndPaste
// with noOfLines 5 and DestLine 1 is:-  ${copyCodeUsingCopyAndPaste(5,1)}`)

// console.log(`\ncopyCodeUsingMovingUp
// with noOfLines 5 and DestLine 1 is:- ${copyCodeUsingMovingUp(5,1)}`)
 


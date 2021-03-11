let src=[{name: 'aryan'},{age: 40}]
// let dst=[...src] // shallow copy in case of dst[0].name="sim"; subsequent operation;

dst = JSON.parse(JSON.stringify(src)); // deep copy. in case of dst[0].name="sim"; subsequent operation;
// ABOVE IS A BEST WAY TO CREATE A DEEP COPY

dst[0]={name:"sim"} 
// THIS IS LIKE CREATING A NEW KEY OBJECT PAIR . IT DOES NOT RELATE TO OLD KEY name. IT SAME AS dst[0]={newName:"sim"}

dst[0].name="sim"; 
// THIS IS REFERENCING EXISTING KEY name. WHICH REFERENCES THE MEMORY LOCATION OF name KEY. HENCE IF THE CONTENTS OF name
// CHANGES IN DST WHICH IS POINTER TO name IT WILL CHANGE IN SRC ALSO.

/* is not same as dst[0].name="sim". the above one is a deep copy and wont change the contents of src. 
while dst[0].name="sim" while change the contents of src  */
console.log(`src ${JSON.stringify(src)}`)
console.log(`dst ${JSON.stringify(dst)}`)


let srcObj={name: 'aryan',age: 40}
let dstObj={...srcObj, name: "sim"}
/* SPREAD OPERATOR AND OBJECT ASSIGN BOTH WILL CREATE A DEEP COPY AND WONT CHANGE THE CONTENTS OF ORIGINAL OBJ*/

console.log(`srcObj ${JSON.stringify(srcObj)}`)
console.log(`dstObj ${JSON.stringify(dstObj)}`)


 src=[11,22,33]
 dst=[...src]
 /* SPREAD IN ARRAY WITH PRIMITIVE DATA TYPES WILL CREATE A DEEP COPY.
  SINCE THE CONTENTS OF ARRAY ARE NOT OBJECTS AND ARE NUMBERS WHICH ARE PRIMITIVE DATA TYPES.*/
 dst[0]=111


 console.log(`src ${JSON.stringify(src)}`)
console.log(`dst ${JSON.stringify(dst)}`)




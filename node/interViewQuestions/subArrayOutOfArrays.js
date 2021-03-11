
function Solution(M,A,N){
    var result =-404
    //write your Logic here:
    let myarr=[];
    while (M>=N) {
        myarr.push(A.splice(0,N))
        M=A.length;
    }
    result=myarr.length
    return result; 
}
 
// INPUT [uncomment & modify if required]

var A=[3,5,7,8,3,9];
var M=parseInt(A.length);

 
var temp=gets();
temp=temp.slice(1,temp.length-1);
temp=temp.split(",");

for(i=0;i<M;i++){
    A.push(parseInt(temp[i]));
}

var N=parseInt(3);
//OUTPUT[uncomment & modify if required]
console.log(Solution(6,[3,5,7,8,3,9],3));
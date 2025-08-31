const myn=[1,2,3,4,5,6,7,8,9,10]
const a=myn
    .map( (num)=>num*10)
    .map((num)=>num+3)
console.log(a);

//chaining using map and filter
const b=myn
    .map( (num)=>num*10)
    .map((num)=>num+3)
    .filter((num)=>num>35)
console.log(b);

const arr=[3,2,4,6,2,7,5,65];
// arr.map((num)=>num*5);   if we write like this then no changes in original arr
// we have to store in other var to display the changes
console.log(arr);
const arr2=arr.map((num)=>num*5).map((num)=>num/5).filter((num)=>num>10);
console.log(arr2);


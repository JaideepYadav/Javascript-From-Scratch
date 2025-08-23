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
const myn=[1,2,3,4,5,6,7,8,9,10]
const a=myn.filter(  (num) => num>4 && num<8 )
console.log(a);

// if we use arrow function and do not return explicitly
// i.e we use curly braces then we have to write return statement
// const b=myn.filter(  (num)=> {
//     return num>4
// })
// console.log(b);

// const user=books.filter(  (bk)=>bk.publish>=2000 )
// console.log(user);


const num=[1,2,3,4,5,6,7,8,9]
const newn=num.map(  (num) => num+5)
console.log(newn);

//nullish coalescing operator (??): null undefined
// if any value is null or undefined then it gives the other number

let val1;
val1=null??10
console.log(val1);
val2=undefined??23
console.log(val2);
val=null??10??20??30 // gives first not null number
console.log(val);


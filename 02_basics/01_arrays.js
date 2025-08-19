//array
const arr=[1,2,3,4,true,"jai",'dsd']
console.log(arr);

//arr methods
arr.push(5)
arr.unshift(0) // add 0 to starting element
arr.shift() // remove the first element
console.log(arr.includes("jai"))

// slice and splice 
// slice does not change the orginal arr, return shallow copy, do not include end index
// splice changes the original arr and it include the end index

const a2=[0,1,2,3,4,5,6]
console.log("A", a2);

const m1=a2.slice(1,3);
console.log(m1);
console.log("B", a2);
const m2=a2.splice(1,3)
console.log(m2);

console.log("C",a2);




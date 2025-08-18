const amount=new Number(100)
console.log(amount);

 console.log(amount.toString().length);
 console.log(amount.toFixed(2)); // give upto 2 decimal
 
const am=new Number(321.324)
console.log(am.toPrecision(3));  // gives approx val to 3 digits

console.log(Math.round(33.499));

// Random function
console.log(Math.random());
console.log((Math.random()*10)+1); // to confirm that number should be >0

console.log(Math.floor(Math.random()*10)+1);

// genrate within given limits
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);



 
 

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let mycreate=new Date(2025,0,5) // year month date
console.log(mycreate.toDateString());

let dates=new Date("2025-01-15")
console.log(dates.toLocaleString());
 let da=new Date("01-14-2025")
 console.log(da.toLocaleString());
 console.log(da.getTime()); // ans in millisec from 1970
 
 
// to see milliseconds from 1970 till now
let timest=Date.now()
console.log(timest);
 let time_in_sec=Math.round(Date.now()/1000)
 console.log(time_in_sec);

 let nitin=new Date()
 console.log(nitin.getMonth()+1);
 
 





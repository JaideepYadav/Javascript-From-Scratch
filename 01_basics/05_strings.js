const name="jaideep"
const count=50
//console.log(name+count+" value")  this is older way

/* string interpolation */
console.log(`My name is ${name} and sal is ${count}`);

const game=new String('jaideepYadav')
console.log(game[0]);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game);

const newString=game.substring(0,4)
console.log(newString);

//for printing from reverse use slice
const a2=game.slice(-8,4)
console.log(a2);

//trim spaces
const alpha="  jaideep Yadav  "
console.log(alpha);

console.log(alpha.trim());

const url="https://abvd%22choudhary"
console.log(url.replace('%22','-'));

console.log(url.includes("sundar"));

console.log(url.split("a"));



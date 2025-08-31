//Immediately Invoked function Expressions (IIFE)
// global scope k pollution  se problem hoti hai kai baar
// to remove that pollution we use IIFE
// to immediately invoke functions
(function one(){
    console.log(`hi mu ad name `);
    
})(); // two round brace are used, last one is considered
// the brackets for the calling of that function, we can
// pass parameter in that

// example

//******** to run 2 iife we have to close first one with semicolon */
let a3="jaidep";
(function two(name){
    console.log(`my name is ${name}`);
    
})(a3);

// arrow function in iife 
(()=>{
    console.log(`jaideep`);
    
})();
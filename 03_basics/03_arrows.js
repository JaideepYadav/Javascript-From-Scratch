const user={
    name:"Jaideep",
    price:4323,
    welcomeMessg:function(){
        console.log(`${this.name}, welcome aaiye`);
        console.log(this);// this will print the current values in the object 
        
    }
}
user.welcomeMessg();
user.name="Sahil"
user.welcomeMessg();
// in node env this will print empty environment but in
// browser console environment it prints windows object
console.log(this); 


// Arrow function ***********************
// function chai(){
//   //  console.log(this); this will print manything of func
//   let name="Jaideep"
//   console.log(this.name);// here it will give undefined becoz
//   // this works in object but not in function
  
// }
// chai()

const chai=()=>{
    let na="jaideep"
    console.log(this);// this will give empty object 
    // inside arrow fnctn but in normal fnctn if we log "this"
    // it gives certain information 
}
chai()

//***************** */
//Normal arrow function
// if we use curly brace then return is must
// if we use () then return is not compulsory
const add=(n1,n2)=>{
    return n1+n2
}
const a=add(32,42)
console.log(a);

// explicit return 
const addn=(n1,n2)=> n1+n2
const an=addn(32,42)
console.log(an);


// if we need to print object in explicit return
// we need to add round brackets
const addt=(n1,n2)=>({aname:"hit"})
console.log(addt(23,23));



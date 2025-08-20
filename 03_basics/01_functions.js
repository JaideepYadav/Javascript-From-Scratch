function fun(){
    console.log("jaideep");
    console.log("yadav");
    
}
// fun  --- this is only reference but not print anything
fun()

// no need to mention function return type
// no need for type of username
function login(username){
    return `My name is ${username}`
}
console.log(login("Jaideep"));

//Rest operators 
function calculate(...num1){ // it will take all parameter and combine in array
    return num1
}
console.log(calculate(1,2,42,3,23));

function calculate3(val1,val2,...num1){ // it will take all parameter and combine in array
    return num1
}
console.log(calculate3(1,2,42,3,23));

// Passing object to functions

const user={
    name:"Jaidee",
    age:24
}
function userD(anyobject){
    console.log(`name is ${anyobject.name}, age is ${anyobject.age}`);
    
}
userD(user)

const add=function(num){
    return num+1
}
console.log(add(5));

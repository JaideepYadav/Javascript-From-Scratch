const juser={
    name:"jai", // name, age are object literal
    age:23,
    salary:324233,
    "phone":352332523,
    location:"Gorakhpur",
    isLoggedin:false,
    lastlogin:["Monday","Saturday"]
}
// 2 types to access object
console.log(juser.age);

//console.log(juser[age]);//this give error becoz it treats as string
console.log(juser.phone);
console.log(juser["age"]);

//use symbol as literal in object
const mysym=Symbol("key1")
console.log(typeof mysym);

const jsuser={
    name:"jai", // name, age are object literal
    age:23,
    salary:324233,
    [mysym]:"key",
    location:"Gorakhpur",
    isLoggedin:false,
    lastlogin:["Monday","Saturday"]
}
//console.log(jsuser.mysym); we have to use []bracket to access
console.log(jsuser[mysym]);// this gives symbol

juser.name="Sahil"
console.log(juser.name);

// to freeze the literals
//Object.freeze(jsuser)
jsuser.name="Sadeep"
console.log(jsuser.name); // name will not be changed


//functions
jsuser.greetings=function(){
    console.log(`Hello, ${this.name}, phone: ${juser.phone}`);
    
}
console.log(jsuser);//function h ye bta rha but uske andr kya h ye nhi bta rha
console.log(jsuser.greetings());






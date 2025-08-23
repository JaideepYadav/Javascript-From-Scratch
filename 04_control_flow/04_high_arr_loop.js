const arr=["hello","world","jai","deep"];
for(const greet of arr){
    console.log(greet);
    
}

//Maps
const map=new Map();
map.set('In','India')
map.set('Usa','usa');
map.set('fr','france')
console.log(map);

//for of loop in map
for(const [key,value] of map){
    console.log(`this is ${key} and value ${value} `);
    
}

// maps are iterable on for ...of loop but not object


// const myObject={
//     'g1':'nfs',
//     'g2':'spiderman'
// }
// for(const [key,value] of myObject)
//     console.log(key,value);
    
const lang={
    js:'java',
    cpp:'c++',
    rb:'ruby'
}

// for iterating over objects we use for...in loop
for (const key in lang) {
    console.log(lang[key]); 
}

const le=["a","b","c"];
for(const key in le){
    console.log(le[key]);
    
}
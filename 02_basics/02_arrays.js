const marvel=["thor","iron","spider"]
const dc=["superman","flash","batman"]
//marvel.push(dc) //instead of merging ye arr ke andr arr aa jata h
console.log(marvel); 


const hero=marvel.concat(dc)
console.log(hero);

//another way to concat  --- spread operator
const all=[...marvel,...dc,]
console.log(all);

// if array in array given ---flat
 a=[1,2,3,4,[32,42,23,[423,22,32],43],53,41]
 console.log(a);
 console.log(a.flat(Infinity));
 


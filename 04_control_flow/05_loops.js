// const names=["raj","jai","yesh","yash"]

// //inside forEach callBack is generally referred as
// //ki give him any function to execute
// names.forEach(function(val){
//     console.log(val);
    
// })

// //arrow fnctn
// names.forEach((item)=>{
//     console.log(item);
    
// })

// objects in array ko print krna by iteration
const jai=[{
    language:"javascript",
    coding:"js",
    name:"jaideep"
},
{language:"python",
coding:"py",
},]

jai.forEach( (item)=>{
    console.log(item.language, item.coding);
    
})
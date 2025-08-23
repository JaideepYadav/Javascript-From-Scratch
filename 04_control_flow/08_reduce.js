 const nums=[1,2,3]

 const total=nums.reduce(function(acc,currVal){
    console.log(`value of accumulator is ${acc}, curentvalue is ${currVal}`);
    
    return acc + currVal
 },0)
 console.log(total);
 


const shopingCart=[{
   itemname:"js course",
   price:2999,
   },
   {
   itemname:"pycourse",
   price:999,
   },
    {
   itemname:"dsa course",
   price:5999,
   }

]

const price=shopingCart.reduce( (acc,item)=>acc+item.price,0)
console.log(price);

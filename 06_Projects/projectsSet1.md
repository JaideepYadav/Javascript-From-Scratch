# Projects Related to dom
## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution

## Project 1

```Javascript
const buttons=document.querySelectorAll('.button')
console.log(buttons)
const body=document.querySelector("body")
buttons.forEach(function(button){
  button.addEventListener('click',function(event){
    console.log(event.target)
    if(event.target.id=='grey'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='yellow'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='blue'){
      body.style.backgroundColor=event.target.id
    }
    if(event.target.id=='white'){
      body.style.backgroundColor=event.target.id
    }

  })
})

```
## Project 2

```Javascript
const fom=document.querySelector("form")
fom.addEventListener('submit',function(event){
  event.preventDefault()
  const height=parseInt(document.getElementById('height').value);
  const weight=parseInt(document.getElementById('weight').value);
  const results=document.getElementById('results')
  let messg=""
  if(height<0 || isNaN(height)){
   messg=("Enter valid height");
  }
  else if(weight=='' || isNaN(weight)){
    messg=("Enter valid weight");
  }
  else{
    const ans=((weight*10000)/(height*height)).toFixed(2)
    messg=(`<span>${ans}</span><br>`);
    if(ans>24.9){
      // const sp=document.createElement('span')
      // sp.appendChild(document.createTextNode(`You are overweight`))
      // document.querySelector('#results').appendChild(sp)
      messg+=`<span>You are overweight</span>`;
    }
    else if(ans<18.6){
      messg+=`<span>You are underweight</span>`
    }

  }
  results.innerHTML=messg;
  

});

```

## Project 3

```Javascript
const clock=document.getElementById('clock');
setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)
// setInterval is to set time in millisec. for the clock
// remember the syntax setInterval(function(){},1000)
```
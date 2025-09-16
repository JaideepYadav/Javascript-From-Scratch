# Projects Related to dom
## Project Link

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solutions

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

## Project 4

```Javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}


```

## Project 5

```Javascript
console.log('Project 5');
const insert=document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`
  <div class='color'>
  <table>
  <tr>
  <th>Key</th>
  <th>Keycode</th>
  <th>Code</th>
  </tr>
  <tr>
  <td>${e.key ===" " ? "Space":e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  </tr>
  </table>
  </div>

  `
})

```


## Project 6

```Javascript
const jai = function () {
  const hex = '0123456789ABCDEF';
  let color="#"
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startcolor = function () {
  if(!interval)
  interval = setInterval(bg, 1000);
  function bg() {
    document.body.style.backgroundColor = jai();
  }
  
};
const stopcolor = function () {
  clearInterval(interval);
  interval=null
};
document.querySelector('#start').addEventListener('click', startcolor);
document.querySelector('#stop').addEventListener('click', stopcolor);


```
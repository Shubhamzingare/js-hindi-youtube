# Projects Related to DOM

## project link 
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1


```javascript

console.log('Shubham')

const buttons = document.querySelectorAll('.button');

const body = document.querySelector('body');

buttons.forEach((btn) => {
  //console.log(btn);

  btn.addEventListener('click', function (e) {
    //console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});


```

## Project 2 Solution code

```javascript

const form = document.querySelector('form');
//console.log(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height*height) / 10000 )).toFixed(2);

    results.innerHTML = `<span>${BMI}</span>`;
  }
});
 

```
## Project 3 solution code

```javascript

const clock = document.querySelector('#clock');

// console.log(date.toLocaleTimeString());

setInterval(function () {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
## Project 6 solution code - bg color change using setInterval and clearInterval
```javascript

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalID;
// console.log(randomColor());
const startChangingColor = function () {
  intervalID = setInterval(bodyColorChange, 2000);
};
document.querySelector('#start').addEventListener('click', function () {
  console.log('started Changing BG color');
  startChangingColor();
});

const bodyColorChange = function () {
  document.body.style.backgroundColor = randomColor();
};

document.querySelector('#stop').addEventListener('click', function () {
  console.log('Color changing STOPPED');
  clearInterval(intervalID);
});


```
## Project 5 solution code - Keybord key press event
```javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class="color">
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>

</table>
  </div>`;
});


```
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
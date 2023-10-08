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
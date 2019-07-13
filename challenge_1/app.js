var turn = 'X';

var thList = document.querySelectorAll('th');

thList.forEach((th) => {
  th.addEventListener('click', event => {
    th.innerHTML = `${turn}`;
    if (turn === 'X') {
      turn = 'O';
    } else {
      turn = 'X';
    }
  });
});

var button = document.querySelector('button');

button.addEventListener('click', event => {
  thList.forEach((th) => {
    th.innerHTML = ''
  });
  turn = 'X';
});


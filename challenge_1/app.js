var turn = 'X';

var thList = document.querySelectorAll('th');

thList.forEach((th) => {
  th.addEventListener('click', event => {
    if (th.innerHTML === '') {
      th.innerHTML = `${turn}`;
      if (thList[0].innerHTML === thList[1].innerHTML && thList[1].innerHTML === thList[2].innerHTML && thList[0].innerHTML !== '') {
        alert(`${thList[0].innerHTML} won!`);
      } else if (thList[0].innerHTML === thList[4].innerHTML && thList[4].innerHTML === thList[8].innerHTML && thList[0].innerHTML !== '') {
        alert(`${thList[0].innerHTML} won!`);
      } else if (thList[0].innerHTML === thList[3].innerHTML && thList[3].innerHTML === thList[6].innerHTML && thList[0].innerHTML !== '') {
        alert(`${thList[0].innerHTML} won!`);
      } else if (thList[1].innerHTML === thList[4].innerHTML && thList[4].innerHTML === thList[7].innerHTML && thList[1].innerHTML !== '') {
        alert(`${thList[1].innerHTML} won!`);
      } else if (thList[2].innerHTML === thList[5].innerHTML && thList[5].innerHTML === thList[8].innerHTML && thList[2].innerHTML !== '') {
        alert(`${thList[2].innerHTML} won!`);
      } else if (thList[2].innerHTML === thList[4].innerHTML && thList[4].innerHTML === thList[6].innerHTML && thList[2].innerHTML !== '') {
        alert(`${thList[2].innerHTML} won!`);
      } else if (thList[3].innerHTML === thList[4].innerHTML && thList[4].innerHTML === thList[5].innerHTML && thList[3].innerHTML !== '') {
        alert(`${thList[3].innerHTML} won!`);
      } else if (thList[6].innerHTML === thList[7].innerHTML && thList[7].innerHTML === thList[8].innerHTML && thList[6].innerHTML !== '') {
        alert(`${thList[6].innerHTML} won!`);
      }
    }
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


const btn = document.querySelector('#btn');
const backg = document.querySelector('#main2');
const backg2 = document.querySelector('#main');
const color = document.querySelector('.color');
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

btn.addEventListener('click', function () {
  let hex = '#';
  for (let i = 0; i < 6; ++i) {
    const x = Math.trunc(Math.random() * colors.length);
    hex += colors[x];
  }
  backg.style.backgroundColor = hex;
  backg2.style.backgroundColor = hex;
  color.textContent = hex;
});

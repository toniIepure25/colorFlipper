const colors = [
  'Red',
  '#E3A4A7',
  'rgb(102,205,170)',
  'green',
  '#f15025',
  'rgba(133,122,200)',
];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');
const backg = document.querySelector('#main');
const backg2 = document.querySelector('#main2');

btn.addEventListener('click', function () {
  const nmb = Math.trunc(Math.random() * colors.length);
  color.textContent = colors[nmb];
  backg.style.backgroundColor = colors[nmb];
  backg2.style.backgroundColor = colors[nmb];
});

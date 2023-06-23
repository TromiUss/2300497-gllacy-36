let first = document.getElementById('slaid1');
let second = document.getElementById('slaid2');
let third = document.getElementById('slaid3');

let page = document.querySelector('.page');

first.onclick = function () {
  page.classList.remove('blue');
  page.classList.remove('orange');
  page.classList.add('pink')
};

second.onclick = function () {
  page.classList.remove('pink');
  page.classList.remove('orange');
  page.classList.add('blue')
};

third.onclick = function () {
  page.classList.remove('blue');
  page.classList.remove('pink');
  page.classList.add('orange')
};

import './scss/estilos.scss';

console.log('..:: EnFlujo ::..');

const as = document.getElementsByClassName('a');
const es = document.getElementsByClassName('e');
const is = document.getElementsByClassName('i');
const os = document.getElementsByClassName('o');
const us = document.getElementsByClassName('u');

const ls = document.getElementsByClassName('l');
const ps = document.getElementsByClassName('p');
const rs = document.getElementsByClassName('r');
const ss = document.getElementsByClassName('s');

// Vocales
for (let i = 0; i < as.length; i++) {
  as[i].addEventListener('mouseover', function () {
    as[i].classList.add('cambiada');
    as[i].innerText = 'a';
  });
}

for (let i = 0; i < es.length; i++) {
  es[i].addEventListener('mouseover', function () {
    es[i].classList.add('cambiada');
    es[i].innerText = 'e';
  });
}

for (let i = 0; i < is.length; i++) {
  is[i].addEventListener('mouseover', function () {
    is[i].classList.add('cambiada');
    is[i].innerText = 'i';
  });
}

for (let i = 0; i < os.length; i++) {
  os[i].addEventListener('mouseover', function () {
    os[i].classList.add('cambiada');
    os[i].innerText = 'o';
  });
}

for (let i = 0; i < us.length; i++) {
  us[i].addEventListener('mouseover', function () {
    us[i].classList.add('cambiada');
    us[i].innerText = 'u';
  });
}

// Consonantes

for (let i = 0; i < ls.length; i++) {
  ls[i].addEventListener('mouseover', function () {
    ls[i].classList.add('consonante-cambiada');
    ls[i].innerText = 'l';
  });
}

for (let i = 0; i < ps.length; i++) {
  ps[i].addEventListener('mouseover', function () {
    ps[i].classList.add('consonante-cambiada');
    ps[i].innerText = 'p';
  });
}

for (let i = 0; i < rs.length; i++) {
  rs[i].addEventListener('mouseover', function () {
    rs[i].classList.add('consonante-cambiada');
    rs[i].innerText = 'r';
  });
}

for (let i = 0; i < ss.length; i++) {
  ss[i].addEventListener('mouseover', function () {
    ss[i].classList.add('consonante-cambiada');
    ss[i].innerText = 's';
  });
}

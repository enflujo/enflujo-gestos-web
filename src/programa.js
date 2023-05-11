import './scss/estilos.scss';

console.log('..:: EnFlujo ::..');

const as = document.getElementsByClassName('a');
const es = document.getElementsByClassName('e');
const is = document.getElementsByClassName('i');
const os = document.getElementsByClassName('o');
const us = document.getElementsByClassName('u');

const bs = document.getElementsByClassName('b');
const cs = document.getElementsByClassName('c');
const ds = document.getElementsByClassName('d');
const js = document.getElementsByClassName('j');
const ls = document.getElementsByClassName('l');
const ms = document.getElementsByClassName('m');
const ns = document.getElementsByClassName('n');
const ps = document.getElementsByClassName('p');
const rs = document.getElementsByClassName('r');
const ss = document.getElementsByClassName('s');
const ts = document.getElementsByClassName('t');
const vs = document.getElementsByClassName('v');
const zs = document.getElementsByClassName('z');

function cambiarVocal(lista, letra) {
  for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
      lista[i].classList.add('cambiada');
      lista[i].innerText = `${letra}`;
    });
  }
}

function cambiarConsonante(lista, letra) {
  for (let i = 0; i < lista.length; i++) {
    lista[i].addEventListener('mouseover', function () {
      lista[i].classList.add('consonante-cambiada');
      lista[i].innerText = `${letra}`;
    });
  }
}

// Vocales
cambiarVocal(as, 'a');
cambiarVocal(es, 'e');
cambiarVocal(is, 'i');
cambiarVocal(os, 'o');
cambiarVocal(us, 'u');

// Consonantes
cambiarConsonante(bs, 'b');
cambiarConsonante(cs, 'c');
cambiarConsonante(ds, 'd');
cambiarConsonante(js, 'j');
cambiarConsonante(ls, 'l');
cambiarConsonante(ms, 'm');
cambiarConsonante(ns, 'n');
cambiarConsonante(ps, 'p');
cambiarConsonante(rs, 'r');
cambiarConsonante(ss, 's');
cambiarConsonante(ts, 't');
cambiarConsonante(vs, 'v');
cambiarConsonante(zs, 'z');

import { lorem, displayLog } from '../utils/util';
import { fromEvent } from 'rxjs';
import { pluck, map, tap, filter } from 'rxjs/operators';

const ul = document.createElement('ul');
ul.classList.add('navbar');
const ArrayList: Array<string> = ['Inicio', 'Sobre nosotros', 'Servicios', 'Contactanos'];
ArrayList.forEach((link) =>{
  const li = document.createElement('li');
  li.innerText = link;
  ul.appendChild(li);
});

document.querySelector('body')?.insertBefore(ul, document.querySelector('h1'));

const progressBar = document.createElement('div');
progressBar.classList.add('progress-bar');
document.querySelector('body')?.insertBefore(progressBar, document.querySelector('h1'));

const p = document.createElement('p');
p.innerText = lorem;
displayLog(p.innerText);

//Funcion que realice el calculo
const calcularScroll = (event: any) => {
  const {scrollTop, scrollHeight, clientHeight} = event;
  console.log(scrollTop, scrollHeight, clientHeight);
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
} 

const scroll$ = fromEvent(document, 'scroll');
scroll$.pipe(
  pluck('target', 'documentElement'),
  map((eventFilter: any)=>calcularScroll(eventFilter)),
  tap((v) => console.log(v))
).subscribe((porcentaje) => {
  if(porcentaje > 1){
    ul.style.display = 'none';
  }else{
    ul.style.display = 'flex';
  }
  progressBar.style.width = `${porcentaje}%`
});
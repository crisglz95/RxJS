import { Observer, of, fromEvent, interval } from "rxjs";
import { displayLog } from "../utils/util";
import { takeWhile, map, takeUntil } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const boton = document.createElement('button');
boton.innerHTML = 'Detener Tiempo';
document.querySelector('body')?.insertBefore(boton, document.querySelector('#log-container'));

const counter$ = interval(1000);

const clickBtn$ = fromEvent<MouseEvent>(boton, 'click');

counter$
  .pipe(
    takeUntil(clickBtn$)
  ).subscribe(observer);


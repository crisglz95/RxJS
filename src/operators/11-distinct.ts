import { Observer, of, fromEvent, interval, from } from "rxjs";
import { displayLog } from "../utils/util";
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const numeros$ = of(1,2,3,1,1,2,2,3,3,4,5,5,4);

// numeros$.pipe(distinctUntilChanged()).subscribe(observer);

interface Personaje{
  nombre: string
}

const personajes: Array<Personaje> = [
  {
    nombre: 'Mario'
  },
  {
    nombre: 'Luigi'
  },
  {
    nombre: 'Mario'
  },
  {
    nombre: 'Peach'
  },
  {
    nombre: 'Bowser'
  },
  {
    nombre: 'Hoopa'
  },
  {
    nombre: 'Hoopa'
  },
  {
    nombre: 'Super Boo'
  },
  {
    nombre: 'Bowser'
  },
];

// from(personajes)
// .pipe(distinctUntilChanged((anterior, actual) => anterior.nombre === actual.nombre))
// .subscribe(observer);

from(personajes)
.pipe(distinctUntilKeyChanged('nombre'))
.subscribe(observer);
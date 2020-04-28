import { Observer, range, from, of, fromEvent } from 'rxjs';
import { filter, pluck } from "rxjs/operators";
import { displayLog } from "../utils/util";
import { Empleado2 } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

// const src$ = range(1, 10);
// src$.pipe(filter((value) => value % 2 === 1)).subscribe(observer);


const Empleados:Array<Empleado2> = [
  {
    id: 1, 
    nombre: 'Cristian', 
    puesto: 'Leader Manager',
    edad: 24
  },
  {
    id: 2, 
    nombre: 'Ray', 
    puesto: 'Developer Sr',
    edad: 26
  },
  {
    id: 3, 
    nombre: 'Raul', 
    puesto: 'iOS Developer',
    edad: 19
  },
  {
    id: 4, 
    nombre: 'Lalo', 
    puesto: 'Android Developer',
    edad: 20
  },
  {
    id: 5, 
    nombre: 'Manu', 
    puesto: 'Developer Sr',
    edad: 18
  },
  {
    id: 6, 
    nombre: 'Paco', 
    puesto: 'iOS Developer',
    edad: 24
  }
];

const obsEmpleados$ = from(Empleados);
//obsEmpleados$.subscribe(observer);

//const devSr$ = obsEmpleados$.pipe(filter((value) => value.puesto === 'Developer Sr')).subscribe(observer);
//const noDevSr$ = obsEmpleados$.pipe(filter((value) => value.puesto !== 'Developer Sr')).subscribe(observer);
const edad = obsEmpleados$.pipe(filter((value) => value.edad > 21)).subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
keyUp$.pipe(
  pluck('code'),
  filter((value) => value === 'Enter')
  ).subscribe(observer);

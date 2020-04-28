import { Observer, timer } from "rxjs";
import { displayLog } from '../utils/util';
import { Empleado } from "../interfaces/interfaces";

const  observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const incrementar10seg = new Date();
incrementar10seg.setSeconds(incrementar10seg.getSeconds() + 10);

const src$ = timer(incrementar10seg);

displayLog('Inicio');
src$.subscribe(observer);
displayLog('Final');
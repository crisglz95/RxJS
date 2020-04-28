import { Observer, interval } from "rxjs";
import { displayLog } from '../utils/util';
import { Empleado } from "../interfaces/interfaces";

const  observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const src$ = interval(3000);

displayLog('Inicio');
src$.subscribe(observer);
displayLog('Final');
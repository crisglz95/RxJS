import { Observer, range, fromEvent } from "rxjs";
import { map, pluck, mapTo } from "rxjs/operators";
import { displayLog } from '../utils/util';
import { Empleado } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

const keyUpMapTo$ = keyup$.pipe(mapTo('Tecla presionada'));

keyUpMapTo$.subscribe(observer);

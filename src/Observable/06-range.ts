import { Observer, range, of } from "rxjs";
import { displayLog } from '../utils/util';
import { Empleado } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const src$ = range(-5, 10);

src$.subscribe(observer);
import { Observer, range, fromEvent } from "rxjs";
import { map } from "rxjs/operators";
import { displayLog } from "../utils/util";
import { Empleado } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

range(1, 5)
  .pipe(map((valor) => valor * 10))
  .subscribe(observer);

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");
keyup$
  .pipe(map<KeyboardEvent, string>((event) => event.code))
  .subscribe(observer);

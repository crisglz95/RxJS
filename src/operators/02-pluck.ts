import { Observer, range, fromEvent } from "rxjs";
import { map, pluck } from "rxjs/operators";
import { displayLog } from "../utils/util";
import { Empleado } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next]`, value),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const keyup$ = fromEvent<KeyboardEvent>(document, "keyup");

// keyup$.pipe(
//     map(({ keyCode }) => ({keyCode}))
//   ).subscribe(observer);

keyup$.pipe(
  pluck('target', 'baseURI')
).subscribe(observer);

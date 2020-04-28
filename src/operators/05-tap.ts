import { Observer, range, fromEvent } from 'rxjs';
import { filter, pluck, tap, map } from "rxjs/operators";
import { displayLog } from "../utils/util";
import { Empleado2 } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const numero$ = range(1,7);
numero$
.pipe(
  tap((x) => console.log("antes", x)),
  map((val) => val * 10),
  tap({
    next: (valor) => console.log('Despues', valor),
    complete: () => console.log('Se termino todo')
  })
)
.subscribe(observer);

import { Observer, from, of } from "rxjs";
import { displayLog } from "./../utils/util";
import { Empleado } from "./../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const Empleados: Array<Empleado> = [
  {
    id: 1,
    nombre: "Jose Carlos",
  },
  {
    id: 2,
    nombre: "Cristian",
  },
  {
    id: 3,
    nombre: "Alejandro",
  },
];

const obs$ = from(Empleados);

obs$.subscribe(observer);

import { Observer, of } from "rxjs";
import { displayLog } from './../utils/util';

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] , ${JSON.stringify(value*10)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const obs$ = of<any>(...[1,2,3,4,5]);

displayLog('Inicio');

obs$.subscribe(observer);

displayLog('fin');
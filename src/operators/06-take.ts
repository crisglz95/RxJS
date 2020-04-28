import { Observer, of } from 'rxjs';
import { displayLog } from "../utils/util";
import { take } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const numeros$ = of(1,2,3,4,5);

numeros$.pipe(take(3)).subscribe(observer); 

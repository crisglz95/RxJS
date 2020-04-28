import { Observer, of, fromEvent } from "rxjs";
import { displayLog } from "../utils/util";
import { takeWhile, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

const src$ = of<number>(1,2,3,4,3,5,1,7);

src$.pipe(takeWhile((numero) => numero < 4));//.subscribe(observer);

click$.pipe(
  map(({x, y}) => ({x, y})), 
  takeWhile(({y}) => y <= 150)
).subscribe(observer);
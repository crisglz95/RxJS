import { Observer, fromEvent, asyncScheduler } from 'rxjs';
import { displayLog } from "../utils/util";
import { sampleTime, map } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, 'click');
click$.pipe(
  sampleTime(3000),
  map(({x, y}) => ({x, y}))
).subscribe(observer);
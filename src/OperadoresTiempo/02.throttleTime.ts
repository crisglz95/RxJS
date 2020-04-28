import { Observer, fromEvent, asyncScheduler } from 'rxjs';
import { displayLog } from "../utils/util";
import { debounceTime, pluck, throttleTime } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

// const click$ = fromEvent(document, 'click');
// click$.pipe(
//   throttleTime(3000)
// ).subscribe(observer);

const input = document.createElement('input');
document.querySelector('#log-container')?.appendChild(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(throttleTime(5000, asyncScheduler, {
  leading: true, 
  trailing: true
}), pluck('target', 'value')).subscribe(observer);
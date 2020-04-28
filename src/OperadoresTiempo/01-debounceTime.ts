import { Observer, fromEvent } from 'rxjs';
import { displayLog } from "../utils/util";
import { debounceTime, pluck } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

// const click$ = fromEvent(document, 'click');
// click$.pipe(
//   debounceTime(3000)
// ).subscribe(observer);

const input = document.createElement('input');
document.querySelector('#log-container')?.appendChild(input);

const input$ = fromEvent(input, 'keyup');

input$.pipe(debounceTime(2000), pluck('target', 'value')).subscribe(observer);
import { Observer, of, fromEvent } from "rxjs";
import { displayLog } from "../utils/util";
import { take, first, tap, pluck, map } from 'rxjs/operators';

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const click$ = fromEvent<MouseEvent>(document, "click");

click$
  .pipe(
    tap(() => console.log("tap")),
    first((event) => event.clientX > 150),
    map(({clientX, clientY}) => ({clientX, clientY}))
  )
  .subscribe((value) => console.log(value));

/*
map((event) => {
  return {
    clientX: event.clientX, 
    clientY: event.clientY
  }
})
*/
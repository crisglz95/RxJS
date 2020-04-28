import { Observer, from, of, fromEvent } from "rxjs";
import { displayLog } from "../utils/util";
import { Empleado } from "../interfaces/interfaces";

const observer: Observer<any> = {
  next: (value) => console.log(`[Next] , ${value}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

src1$.subscribe(({x, y}) => {
    console.log(x);
    console.log(y);
});

src2$.subscribe(({keyCode})=>{
    console.log(keyCode);
})
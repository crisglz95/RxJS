import { Observer, of, fromEvent, interval } from "rxjs";
import { displayLog } from "../utils/util";
import { takeWhile, map, takeUntil, tap, skip } from "rxjs/operators";

const observer: Observer<any> = {
  next: (value) => displayLog(`[Next] ${JSON.stringify(value)}`),
  error: (err) => console.error("[Error Observable] ", err.name),
  complete: () => displayLog("[Complete]"),
};

const boton = document.createElement("button");
boton.innerHTML = "Detener Tiempo";
document
  .querySelector("body")
  ?.insertBefore(boton, document.querySelector("#log-container"));

const counter$ = interval(1000);

const clickBtn$ = fromEvent<MouseEvent>(boton, "click").pipe(
  tap(() => console.log("Tap antes del skip")),
  skip(1),
  tap(() => console.log("Despies del skip"))
);

// clickBtn$.subscribe(observer);  

// counter$.pipe(skip(4)).subscribe(observer);

counter$
  .pipe(
    takeUntil(clickBtn$)
  ).subscribe(observer);

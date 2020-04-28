import { Observable, Observer } from 'rxjs';
import { displayLog } from './../utils/util';

const observer: Observer<any> ={
    next: (value) => displayLog(`[Next] , ${JSON.stringify(value)}`),
    error: (err) => console.error("[Error Observable] ", err.name),
    complete: () => console.warn("[Complete]")
}

const intervalo$ = new Observable((suscriber) => {
    let count = 0; 
    const interval = setInterval(() => {
        count++;
        suscriber.next(count);
        console.log('Consola', count);
    }, 1000);

    // setTimeout(() => {
    //     suscriber.complete();
    // }, 2500);

    return () => {
        clearInterval(interval);
        console.log('IntervaloDestruido');
    }
});

const susb1 = intervalo$.subscribe(observer);
//const subs2 = intervalo$.subscribe(observer);

setTimeout(() => {
    susb1.unsubscribe();
    console.log('Se ejecuto el unsubscribe');
}, 3000);


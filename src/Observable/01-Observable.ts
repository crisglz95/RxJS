import { Observable, Observer } from 'rxjs';
import { displayLog } from './../utils/util';

const observer: Observer<any> ={
    next: (value) => displayLog(`[Next] , ${JSON.stringify(value)}`),
    error: (err) => console.error("[Error Observable] ", err.name),
    complete: () => console.warn("[Complete]")
}

/*
* Crea un Observable
*/

//const obs$ = Observable.create();

/**
 * 2. Manera de crear un observable
 */

const obs$ = new Observable((subscriber) => {
    subscriber.next('Hola Mundo');
    subscriber.next('Hola JC');
    subscriber.next('Hola Cris');
    subscriber.next({a: 2, b: 5});

    //Causando un error
    //const a: any = undefined;
    //a.nombre = 'Cris';

    //const b: any = undefined;
    //b.apellido = 'Gonzalez';

    //suscriber.next('Paso error');

    subscriber.complete();

    subscriber.next('xyz');
});

obs$.subscribe(
    // //Informacion
    // (value) => displayLog(`[Next] , ${JSON.stringify(value)}`), 

    // //Error
    // (err) => console.error("[Error Observable] ", err.name), 

    // //Finalizado
    // () => console.warn("[Complete]")
    
    
)
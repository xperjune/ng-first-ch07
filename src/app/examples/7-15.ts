import Rx = require('rxjs');

const untilFive$ = Rx.Observable.interval(1000).take(5);
const num$ = Rx.Observable.from([10,9,8,7,6,5,4,3,2,1]).map(n => n* 2);

Rx.Observable.zip(num$, untilFive$, (n, u) => ({n, u})).subscribe(n => console.log(n));



let age$ = Rx.Observable.of<number>(27, 25, 29);
let name$ = Rx.Observable.of<string>('Foo', 'Bar', 'Beer');
let isDev$ = Rx.Observable.of<boolean>(true, true, false);

Rx.Observable
    .zip(age$,
         name$,
         isDev$,
         (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
    .subscribe(x => console.log(x));
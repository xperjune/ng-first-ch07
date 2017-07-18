import Rx = require('rxjs');

const number$ = Rx.Observable.create((observer) => {
    let myCounter = 0;
    const producerFn = () => observer.next(myCounter++);

    const intervalId = setInterval(producerFn, 1000);

    const finishFn = () => {
        console.log('call finishFn');
        clearInterval(intervalId);
        observer.complete();
    }

    setTimeout(finishFn, 10*1000);

    console.log('return finishFn');
    return finishFn;
});

const subscription = number$.subscribe((n) => console.log(`streaming ... ${n}`));
console.log('done subscription');
setTimeout(() => {
    console.log('subscription timeout 5s');
    subscription.unsubscribe();
} , 5*1000);
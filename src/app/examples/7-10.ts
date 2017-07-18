import Rx = require('rxjs');

const subscribeFn = function(observer) {
    observer.next('first rxjs');
}

const myFirstObservable = new Rx.Observable(subscribeFn);
myFirstObservable.subscribe((d) => console.log(d));



const mySecondObservable = Rx.Observable.of("1", "2");
mySecondObservable.subscribe((d) => console.log(d));
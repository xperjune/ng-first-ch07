import Rx = require('rxjs');

console.log('---------- number -----------');
const numArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray
    .map(n => n*2)
    .forEach(n => console.log(`num: ${n}`));

console.log('---------- rxjs -----------');
const num$ = Rx.Observable.from([1,2 , 3, 4, 5, 6 ,7, 8, 9, 10]);
console.log('--- map');
num$
    .map(n => n*2)
    .subscribe(n => console.log(`num: ${n}`));

console.log('--- filter');
num$
    .filter(n => n % 2 === 0)
    .subscribe(n => console.log(`num: ${n}`));
    
console.log('--- reduce');
num$
    .filter(n => n % 2 === 0)
    .reduce((n1, n2) => n1 + n2)
    .subscribe(res => console.log(`result: ${res}`));

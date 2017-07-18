"use strict";
exports.__esModule = true;
var Rx = require("rxjs");
console.log('---------- number -----------');
var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numArray
    .map(function (n) { return n * 2; })
    .forEach(function (n) { return console.log("num: " + n); });
console.log('---------- rxjs -----------');
var num$ = Rx.Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log('--- map');
num$
    .map(function (n) { return n * 2; })
    .subscribe(function (n) { return console.log("num: " + n); });
console.log('--- filter');
num$
    .filter(function (n) { return n % 2 === 0; })
    .subscribe(function (n) { return console.log("num: " + n); });
console.log('--- reduce');
num$
    .filter(function (n) { return n % 2 === 0; })
    .reduce(function (n1, n2) { return n1 + n2; }, 1)
    .subscribe(function (res) { return console.log("result: " + res); });

"use strict";
exports.__esModule = true;
var Rx = require("rxjs");
var untilFive$ = Rx.Observable.interval(1000).take(5);
var num$ = Rx.Observable.from([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]).map(function (n) { return n * 2; });
Rx.Observable.zip(num$, untilFive$, function (n, u) { return ({ n: n, u: u }); }).subscribe(function (n) { return console.log(n); });
var age$ = Rx.Observable.of(27, 25, 29);
var name$ = Rx.Observable.of('Foo', 'Bar', 'Beer');
var isDev$ = Rx.Observable.of(true, true, false);
Rx.Observable
    .zip(age$, name$, isDev$, function (age, name, isDev) { return ({ age: age, name: name, isDev: isDev }); })
    .subscribe(function (x) { return console.log(x); });

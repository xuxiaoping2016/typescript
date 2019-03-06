"use strict";
// interface SquareConfig {
//   color?: string;
//   width?: number;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.clor) {
//     newSquare.color = config.clor;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare = createSquare({color: "black"});
//================================================================
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// let p1: Point = {x:10,y:200}
// //Cannot assign to 'x' because it is a read-only property
// p1.x = 13;
//只读属性 案例2
// let a: number[] = [1, 2, 3, 4];
// let ro: ReadonlyArray<number> = a;
//Index signature in type 'ReadonlyArray<number>' only permits reading
// ro[1] = 200;
// ro.push(900)
//Type 'ReadonlyArray<number>' is missing the following propertiesfrom type 'number[]': pop, push, reverse, shift, and 3 more
// a = ro;
// a = <number[]>ro;
// console.log(a[1],ro[1])
// 额外的属性检查
/*对象字面量会被特殊对待而且会经过 额外属性检查，当将它们赋值给变量或作为参数传递的时候。
如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误 */
// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName:string]:any;
// }
// function createSquare(config: SquareConfig): { color: string; area: number } {
//   let newSquare = {color: "white", area: 100};
//   if (config.color) {
//     newSquare.color = config.color;
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width;
//   }
//   return newSquare;
// }
// let mySquare = createSquare({colour: "black", width:200});
// let mySquare = createSquare({colour: "black", width:200} as SquareConfig);
//函数类型
// interface SearchFunc {
//     (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString);
//   return result > -1;
// }
/**  可索引的类型  */
// class Animal {
//     name: string;
// }
// class Dog extends Animal {
//     breed: string;
// }
// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }
/**   */
/** 类类型 */
// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }
// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
//     constructor(h: number, m: number) { 
//         this.currentTime = new Date();
//     }
// }
/**
 *
 */
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

//类型兼容性
// interface Named {
//     name: string;
// }

// class Person1 {
//     name: string = '4';
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person1();

/** 开始 */
// interface Named {
//     name: string;
// }

// let x: Named;
// let y = { name: 'Alice', location: 'Seattle' };
// let z = { name1: 'Alice', location: 'Seattle' };
// x = y;
// 不能将类型“{ name1: string; location: string; }”分配给类型“Named”。
//   类型“{ name1: string; location: string; }”中缺少属性“name”
// x = z;

// function greet(n: Named) {
//     console.log('Hello, ' + n.name);
// }
// greet(y)

/**  比较两个函数  */
// let x = (a: number) => 0;
// let y = (b: number, s: string) => 0;

// y = x; // OK
// //不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。
// // let x: (a: number) => number
// x = y; 


/** 函数参数双向协变 */
// enum EventType { Mouse, Keyboard }

// interface Event { timestamp: number; }
// interface MouseEvent extends Event { x: number; y: number }
// interface KeyEvent extends Event { keyCode: number }
// console.log(MouseEvent)

// function listenEvent(eventType: EventType, handler: (n: Event) => void) {
//     /* ... */
// }

// Unsound, but useful and common
// 类型“(e: MouseEvent) => void”的参数不能赋给类型“(n: Event) => void”的参数。
//   参数“e”和“n” 的类型不兼容。
//     不能将类型“Event”分配给类型“MouseEvent”。
//       类型“Event”中缺少属性“altKey”
// listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
// listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y));
// listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly incompatible types
// listenEvent(EventType.Mouse, (e: number) => console.log(e));



//** 可选参数与剩余参数 */
// function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
// }

// Unsound - invokeLater "might" provide any number of arguments
// invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
// invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));






// 高级类型
// 交叉类型（Intersection Types）

function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person2 {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger2 implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new Person2("Jim"), new ConsoleLogger2());
var n = jim.name;
jim.log();


/** 
 * 联合类型 
 */

// interface Bird {
//     fly();
//     layEggs();
// }

// interface Fish {
//     swim();
//     layEggs();
// }

// function getSmallPet(): Fish | Bird {
//     return {
//         swim(){ console.log('swin')},
//         fly(){console.log('fly')},
//         layEggs(){console.log('layEggs')}
//     }
// }

// let pet = getSmallPet();
// pet.layEggs(); // okay
// pet.swim();    // errors
// pet.fly()
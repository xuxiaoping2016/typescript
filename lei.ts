/**
 * 类 继承
 * Property 'name' is protected and only accessible within class 'Animal' and its subclasses
 * Property 'name' is private and only accessible within class 'Animal'
 * 
 * TypeScript使用的是结构性类型系统。 当我们比较两种不同的类型时，并不在乎它们从何处而来，
 * 如果所有成员的类型都是兼容的，我们就认为它们的类型是兼容的。
 */

// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// let ani = new Animal("luotuo")
// let sam = new Snake("Sammy the Python");

// console.log(ani.name)
// ani.move()
// sam.move();




// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }
// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.

/**  存取器
 * 
 */

// let passcode = "secret passcode";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }

// let employee = new Employee();
// employee.fullName = "Bob Smith";
// if (employee.fullName) {
//     alert(employee.fullName);
// }
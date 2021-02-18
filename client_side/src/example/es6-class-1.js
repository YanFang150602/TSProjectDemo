/**
 * 1、class定义
 */

// es5的类
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// 类的方法（实例可以使用）
Point.prototype.getPosition = function() {
  return '{' + this.x + ', ' + this.y + '}';
}
// 创建实例
var p1 = new Point(2, 3);
console.log(p1);
console.log(p1.getPosition());


// es6 使用class定义类
class Point2 {
  // 默认有个无参构造函数constructor (){}
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  // 创建在Point类的原型对象上
  getPosition() {
    return `{${this.x}, ${this.y}}`;
  }
}
const p21 = new Point2(2, 3);
console.log(p21);
console.log(p21.getPosition());
// const p21 = Point2(2, 3); Class constructor Point2 cannot be invoked without 'new'
console.log(p21.hasOwnProperty('getPosition')); // false
console.log(p21.__proto__.hasOwnProperty('getPosition')); // true

/**
 * 2、class 实现存取值
 */

// object 存取值函数
var person = {
  _age: 18,
  set age(newVal) {
    if (newVal > this._age) {
      console.log('咋变老了！！！');
    } else {
      console.log('依然年轻，哈哈哈。。。');
    }
    this._age = newVal;
  },
  get age() {
    console.log('问我年龄作甚？');
    return this._age;
  }
}
console.log(person.age);
person.age = 17;
person.age = 56;

// class也可以实现存取值
class Person {
  constructor(newVal) {
    this._age = newVal;
  }

  set age(newVal) {
    if (newVal > this._age) {
      console.log('咋变老了！！！');
    } else {
      console.log('依然年轻，哈哈哈。。。');
    }
    this._age = newVal;
  }

  get age() {
    console.log('问我年龄作甚？');
    return this._age;
  }
}

const p = new Person(17);
console.log(p.age);
p.age = 34;

/**
 * 3、class定义方式
 */
// 函数定义两种方式
// 函数声明式
function t() {}
// 函数表达式
const t2 = function() {}

// class 也有两种
// 声明式
class Test {}
// 表达式
const Test2 = class c {}
// const t22 = new c();  c is not defined
const t22 = new Test();
const Test3 = class {}

/**
 * 4、static修改
 */

// 定义在类的方法都可以被实例继承，但static修饰的不可以
// 静态方法 static修饰
class Point3 {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  // 所有Point2的实例可继承使用
  getPosition () {
    return `{${this.x}, ${this.y}}`;
  }

  // 实例不可使用
  static getClassName () {
    return Point.name;
  }
}
const p31 = new Point3(3, 3);
console.log(p31.getPosition()); // {3, 3}
// console.log(p22.getClassName());  p22.getClassName is not a function
console.log(Point3.getClassName()); // Point
/*
es6中只有静态方法没有静态属性 
*/
class Point4 {
  constructor (x) {
    this.x = x;
  }
}
// 实现静态属性，es6中暂时不能用static修饰
Point4.y = 33;
const p41 = new Point4(45);
console.log(p41.x); // 45
console.log(p41.y); // undefined
console.log(Point4.y); // 33

/**
 * 5、私有属性 私有方法
 */
class Point5 {
  func () {}

  // 使用_开头的函数，规定是私有的（意义不大，仍可以被随便使用）
  _func() {}
}

// 使用call apply方法，模块封装
const _func = function() {
  console.log(this);
}
class Point6 {
  // 私有属性
  // z = 0; 目前转码工具不支持 currently no loaders are configured to process this file
  func () {
    _func.call(this);
  }
}
_func(); // 输出的this指向window
const p61 = new Point6();
p61.func(); // 输出的this指向p61这个实例（实现模块封住）

/**
 * 7、new.target
 */
function Test4 () {
  console.log(new.target);
}
const t4 = new Test4();
//console:
// ƒ Test4 () {
//   console.log(new.target);
// }

class Point7 {
  constructor() {
    console.log(new.target);
  }
}
const p7 = new Point7();
//console:
// class Point7 {
//   constructor() {
//     console.log(new.target);
//   }
// }

class Parent {
  constructor () {
    console.log(new.target);
  }
}
class Child extends Parent {
  constructor () {
    super();
  }
}
const c = new Child();
//console:
// class Child extends Parent {
//   constructor () {
//     super();
//   }
// }

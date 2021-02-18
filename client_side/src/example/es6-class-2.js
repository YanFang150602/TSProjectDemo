/**
 * 1、类的继承
 */
// es5实现类的继承，使用原型继承 + 对象冒充
function Food (type) {
  this.type = type;
}
Food.prototype.getType = function () {
  return this.type;
}
function Vegetables (name, type) {
  this.name = name;
  Food.call(this, type);
}
Vegetables.prototype = new Food();
const tomato = new Vegetables('tomato', 'vegetable');
// console.log(tomato.getType()); // vegetable

// es6类的继承，使用extends关键字
class Parent {
  constructor (name) {
    this.name = name;
  }

  getName () {
    return this.name;
  }

  static getStaticName () {
    return this.name;
  }
}
class Child extends Parent {
  constructor (name, age) {
    super(name);
    this.age = age;
  }
}
const c = new Child('yafnn', 44);
// console.log(c);
// console.log(c.getName());
// console.log(c instanceof Child); // true
// console.log(c instanceof Parent); // true
// 子类也可以继承父类的静态方法，子类的实例也不能使用父类的静态方法（父类的实例不能使用静态方法）
// console.log(Child.getStaticName()); // Child

/**
 * 2、super
 */
// 2.1、super作为函数
// 在子类的构造函数里必须先调用super函数，才能使用this
// 2.2、super作为对象
class Parent2 {
  constructor (name) {
    this.name = name;
  }

  getName () {
    console.log('我是父类里的普通方法，使用我作甚？');
    // 当该方法被子类调用（super.getName()）时，此时这里的this指向的是子类的实例
    return this.name;
  }

  static getStaticName () {
    console.log('我是父类里的静态方法，使用我作甚？');
    return this.name;
  }
}
class Child2 extends Parent2 {
  constructor (name, age) {
    super(name);
    this.age = age;
  }

  // 在普通方法里，super指的是父类的原型
  getName () {
    console.log('我是子类里的普通方法，去调用父类的普通方法->');
    return super.getName();
  }

  // 在静态方法里，super指的就是父类
  static getStaticName () {
    console.log('我是子类里的静态方法，去调用父类的静态方法->');
    return super.getStaticName();
  }
}
const c2 = new Child2('yff', 23);
// console.log(c2.getName());
// console.log(Child2.getStaticName());

/**
 * 3、prototype __proto__
 */
const obj3 = new Object();
console.log(obj3.__proto__ === Object.prototype); // true
// 子类的__proto__指向父类本身
// 子类的prototype属性的__proto__指向父类的prototype属性
// 类的实例的__proto__属性指向类的prototype属性

// es5里原生类：
// Boolean
// Number
// String
// Array
// Function
// RegExp
// Error
// Object

class CustomArray extends Array {
  constructor(...args) {
    super(...args);
  }
}
const ca =  new CustomArray(3);
ca.fill('8');
console.log(ca);
const ca2 =  new CustomArray(3, 4, 5);
console.log(ca2);

/**
 * es6和es5在实现类的继承上是存在差异的：
 * es5构造函数，先创建子构造函数实例this，然后再将父构造函数里的属性、方法添加到这个this上；
 * es6的类，先从父类取到实例对象this，然后在调到super函数之后，再将子类的属性、方法添加到这个this上。
 */

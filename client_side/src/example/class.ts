import { NumericLiteral } from "typescript";

/**
 * ts中的类，定义语法与es6基本一致
 * ts中的属性、方法可以使用修饰符进行修饰，如public protectd private
 * es6是没有修饰符的
 */
class Point {
  public x: number;
  public y: number;

  // ts中可以使用static定义静态属性
  static z: number;

  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getPosition (): string {
    return `{${this.x}, ${this.y}}`
  }
}
const p = new Point(1, 2);
// console.log(p.getPosition());

class Parent {
  public name: string;
  constructor (name: string) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor (name: string) {
    super(name);
  }
}
const c21 = new Child('yff');

/**
 * 公有、私有、受保护
 */
// 1、公有public （默认）

// 2、私有private
class TestPrivate {
  private money: number;
  constructor (money: number) {
    this.money = money;
  }
}
const tp = new TestPrivate(15000);
// console.log(tp);
// console.log(tp.money); 属性“money”为私有属性，只能在类“TestPrivate”中访问
class PrivateChild extends TestPrivate {
  constructor (money: number) {
    super(money);
    // console.log(super.money); 通过 "super" 关键字只能访问父类的公共方法和受保护方法。private访问不到！
  }
}

// 3、受保护protected
class TestProtected {
  protected money: number;
  protected constructor (money: number) {
    this.money = money;
  }

  protected getMoney (): number {
    return this.money;
  }
}
// const tpd = new TestProtected(15000); 1.1父类中构造方法使用了protected修饰，那么构造函数不能使用！！！
// console.log(tpd);
// console.log(tpd.money); 属性“money”受保护，只能在类“TestProtected”及其子类中访问。

class ProtectedChild extends TestProtected {
  constructor (money: number) {
    super(money);
    // console.log(super.money); // 通过 "super" 关键字只能访问基类的公共方法和受保护方法。
    console.log(super.getMoney());
  }

  getMoney (): number {
    return this.money; // 子类中可以访问父类中protected修饰的属性
  }
}
const pc = new ProtectedChild(3000); // 1.2通过使用子类的构造函数，声明对象

// 4、readonly只读
class TestReadonly {
  public readonly name: string;
  constructor (name: string) {
    this.name = name;
  }
}
const tr = new TestReadonly('yffff');
// console.log(tr);
// tr.name = 'yyserss'; 法分配到 "name" ，因为它是只读属性。

/**
 * 参数属性
 */
class A {
  constructor (name: string) {}
}

const a = new A('yyy');
// console.log(a.name); 类型“A”上不存在属性“name”。

class B {
  // 1.1参数name使用public修饰，等同于在类中定义了个public name属性
  constructor (public name: string) {}
}
const b = new B('lison'); // 1.2构造函数里传的值会赋值给public name属性
// console.log(b.name); // 1.3输出：lision

/**
 * 静态属性、静态方法
 */
class TestStatic {
  public static desc: string = 'test!'
  public static getDesc (): string {
    return this.desc; // 1.2此时的this指的是类本身，等同于TestStatic.desc
  }
}
const ts = new TestStatic();
// console.log(ts.desc); 属性 "desc" 是 "TestStatic" 的静态成员
// console.log(ts.getDesc()); 属性 "getDesc" 是 "TestStatic" 的静态成员
console.log(TestStatic.desc); // test!
console.log(TestStatic.getDesc()); // 1.1

/**
 * 类里的可选属性
 */
class Info{
  public name: string;
  public age?: number;

  constructor (name: string, age?: number, public sex?: string) {
    this.name = name;
    this.age = age; // 1.1添加age属性赋值，构造函数里是否有age，实例里都会有age属性
  }
}
const info21 = new Info('i1');
// console.log(info21); // Info {sex: undefined, name: "i1"} 没有age属性
const info22 = new Info('i2'); // 1.2
// console.log(info22); // Info {sex: undefined, name: "i2", age: undefined}
const info23 = new Info('i3', 23);
// console.log(info23); // Info {sex: undefined, name: "i3", age: 23}
const info24 = new Info('i4', 23, 'male');
// console.log(info24); // Info {sex: "male", name: "i4", age: 23}

/**
 * 存取值
 */
class Info2{
  public name: string;
  public age: number;
  private _money: number;

  constructor (name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // "set" 访问器不能具有返回类型批注。
  set money (money: number) {
    this._money = money;
  }

  get money (): number {
    return this._money;
  }
}
const info31 = new Info2('i31', 23);
info31.money = 3444;
console.log(info31.money);

/**
 * 抽象类、抽象方法
 * 使用关键字abstract
 * 抽象类不能实例化
 * 抽象类的子类需要实现抽象类里的抽象方法
 * 
 * ts2.x版本可以使用abstract修饰抽象类的属性、存取器
 * 抽象类的子类需要实现抽象类里的抽象属性
 */
abstract class People {
  abstract age: number;
  abstract get insideAge(): number;
  abstract set insideAge(age: number);

  constructor (public name: string) {}
  abstract print(): void;
}
// const people = new People('tt'); 无法创建抽象类的实例。
class Man extends People {
  age: number;

  get insideAge(): number {
    return this.age;
  }

  set insideAge(age: number) {
    this.age = age;
  }

  constructor (name: string) {
    super(name);
  }

  print() {
    console.log(this.name);
  }
}
const man = new Man('Man·lison');
man.print();

/**
 * 类实现接口
 * 使用implement关键字
 */
interface Food {
  type: string;
}
class CFood implements Food {
  type: string; // 必须要有type属性，类型、修饰要保持一致
}
class E {
  protected name: string;
}
interface I extends E {}
/* class F implements I {
  name: string; // 属性“name”受保护，但类型“F”并不是从“E”派生的类。
} */
class F extends E implements I {
  name: string;
}

/**
 * 泛型
 */
// new()指的是构造函数，构造函数默认返回的是实例对象00
const create = <T>(c: new() => T): T => {
  return new c();
}
class Infos {
  public age: number = 18;
}
console.log(create(Infos).age);

// symbol是基本类型，表示独一无二
const s = Symbol(); // 在tsconfig.json里添加"lib": ["es6"], 避免此处报错
console.log(`s = ${String(s)}`);
const s2 =Symbol();
console.log(`s2 = ${String(s2)}`);
// console.log(s === s2); // 此条件将始终返回 "false"，因为类型 "typeof s" 和 "typeof s2" 没有重叠。
const s3 = Symbol('lison');
console.log(`s3 = ${String(s3)}`);
const s4 = Symbol('lison');
console.log(`s4 = ${String(s4)}`);
// console.log(s3 === s4); // 此条件将始终返回 "false"，因为类型 "typeof s3" 和 "typeof s4" 没有重叠。
// Symbol值不能与其他类型做运算的
// s4 + 12; 运算符“+”不能应用于类型“unique symbol”和“number”。
// Symbol值可以转字符串\布尔值\取反
console.log(s4.toString());
console.log(Boolean(s4));
console.log(!s4);

let prop = 'name';
const s5 = Symbol('name');
const info = {
  // name: 'lison'
  // [prop]: 'lison'
  [`my${prop}`]: 'my lison',
  [s5]: 'Symbol_name' // 使用Symbol声明的变量作为对象的属性，是比较安全的
}
console.log(info);
info.s5 = 'info.s5 error';  // 使用Symbol声明的变量作为对象的属性，这种方式只是在对象info上新增个属性，属性名s5
info[s5] = 'info[s5] right';  // 使用Symbol声明的变量作为对象的属性，只能通过这种方式获取值、修改值
console.log(info);
// 使用Symbol声明的变量作为对象的属性，如下方式是获取不到的
for(const key in info) {
  console.log(key);
}
console.log(Object.keys(info));
console.log(Object.getOwnPropertyNames(info));
console.log(JSON.stringify(info));
// 使用Symbol声明的变量作为对象的属性，如下方式是获取到的
console.log(Object.getOwnPropertySymbols(info));
console.log(Reflect.ownKeys(info));

// Symbol.for() Symbol.keyFor()
const s6 = Symbol('lison');
const s7 = Symbol('lison');
const s8 = Symbol.for('lison');
const s9 = Symbol.for('lison');
const s10 = Symbol.for('hahaha');
// console.log(s8 === s9); 浏览器效果：true
// console.log(s9 === s10); 浏览器效果：false
console.log(Symbol.keyFor(s)); // undefined
console.log(Symbol.keyFor(s6)); // undefined
console.log(Symbol.keyFor(s8)); // lison Symbol.for()全局注册的key的值

// Symbol.hasInstance
const info2 = {
  [Symbol.hasInstance] (param: any) {
    console.log(param); // instanceof，触发了该函数
  }
}
console.log({a: 'a'} instanceof <any>info2); // 断言处理："instanceof" 表达式的右侧必须属于类型 "any"，或属于可分配给 "Function" 接口类型的类型。

// Symbol.isConcatSpreadable
let sarr = [1, 2];
let sarr2: any[] = [];
console.log(sarr2.concat(sarr, [5, 6])); // [1,2,5,6] 扁平化
// sarr[Symbol.isConcatSpreadable] = false;  // 阻止扁平化, 此处webpack编译失败，索引表达式不是number类型
// console.log(sarr2.concat(sarr, [5, 6])); // 浏览器效果：[[1,2],5,6]

// Symbol.species
class C extends Array {
  constructor(...params: any[]) {
    super(...params);
  }

  // es6上，没有这个， 88行返回的是true， 创建衍生对象的构造函数
  static get [Symbol.species] () {
    return Array;
  }

  getName() {
    return 'lison';
  }
}
const c = new C(1,2,3);
console.log(c); // [1,2,3]
const c2 = c.map(item => {
  return item + 1;
});
console.log(c2 instanceof C); // false
console.log(c2 instanceof Array); // true

// Symbol.match Symbol.split
const info3 = {
  [Symbol.match] (param: string) {
    console.log(param.length); // 101行，match方法触发
  },
  [Symbol.split] (param: string) {
    console.log('split', param.length); // 102行，match方法触发
  }
}
'asbdfewr'.match(<RegExp>info3); // 使用断言，忽略info3类型
'asbdfewr'.split(<any>info3); // 使用断言，忽略info3类型

// Symbol.replace
const info4 = {
  [Symbol.replace] (param: string) {
    console.log('replace', param); // 110行，match方法触发
  }
}
console.log('asbdfewr'.replace(<any>info4, 'sss')); // 使用断言，忽略info3类型

// Symbol.iterator
const sarr3 = ['r', 't','y'];
const iterator = sarr3[Symbol.iterator]();
console.log(iterator.next()); // {value: "r", done: false}
console.log(iterator.next()); // {value: "t", done: false}
console.log(iterator.next()); // {value: "y", done: false}
console.log(iterator.next()); // {value: undefined, done: true}

// Symbol.toPrimitive 原始类型
let info5: unknown = {
  [Symbol.toPrimitive] (type: any) {
    console.log('toPrimitive', type.toString()); // 127行触发
  }
}
console.log((info5 as number)++);
console.log(info5);

// Symbol.toStringTag
const info6 = {
  // [Symbol.toStringTag]: 'lison' // 133行，toString()方法触发
  get [Symbol.toStringTag] () {
    return 'lison';
  }
}
console.log(info6.toString());

// Symbol.unscopables
const info7 = {
  a: 'a', b: 'b'
}
// 不支持 "with" 语句。"with" 程序块中的所有符号都将具有类型 "any"。
// with(info7) {
//   console.log(a, b); // a b
// }
console.log(Array.prototype[Symbol.unscopables]);

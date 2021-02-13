/* 
1、函数声明式
function addFunction(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

2、函数表达式
const addFunction2 = (arg1: number, arg2: number): number =>arg1 + arg2;
*/
let addFunction: (x: number, y: number) => number;
addFunction = (arg1: number, arg2: number): number => arg1 + arg2;
addFunction = (arg1:number, arg2: number) => arg1 + arg2;

// 使用接口定义函数类型
interface IAdd {
  (x: number, y: number): number
}
// 上面接口定义的函数类型可以简化成类型别名
// 类型别名定义函数类型
type TAdd  = (x: number, y: number) => number;
// isString等同于string
type isString = string;
let str2: isString = 'sss';
let addVar: TAdd;
addVar = (arg1: number, arg2: number) => arg1 + arg2;
let addVar2 = (arg1, arg2, arg3) => arg1 + arg2 + (arg3? arg3 : 0);

// 可选参数
type TAdd3 = (x: number, y: number, z?: number) => number;
let addFunction3: TAdd3;
addFunction3 = (arg1, arg2) => arg1 + arg2;
console.log(addFunction3(1, 2));
addFunction3 = (arg1, arg2, arg3) => arg1 + arg2 + arg3;
console.log(addFunction3(1, 2, 3));

// 默认参数
// es5
function es5Func(x, y) {
  y = y || 0;
  return x + y;
}
// console.log(es5Func(2));
// es6
function es6Func(...args) {
  console.log(args);
}
console.log(es6Func(1)); // [1]
console.log(es6Func(1, 2, 3)); // [1, 2, 3]
function es6Func2(arg1, arg2 = 0) {
  return arg1 + arg2;
}
// ts
function tsFunc(arg1: number, arg2: number = 0) {
  return arg1 + arg2;
}
// 扩展运算符...
let arr5 = [1,2,3];
let arr6 = [...arr5];
console.log(`arr6 = ${arr6}`);
let obj5 = {a: 'a1', b: 'b1'};
let obj6 = {...obj5, c: 'c1'};
console.log('obj6 =', obj6);

// 函数重载
// 使用function声明重载函数
function handleData(x: string): string[];
function handleData(x: number): number[];
// 下面是函数重载定义的函数实体
function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('');
  } else {
    return x.toString().split('').map(item => Number(item));
  }
}


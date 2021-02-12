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

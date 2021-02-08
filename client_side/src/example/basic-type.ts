// 布尔类型
// let bool: boolean = false;
let bool: boolean;
bool = true;
// bool = 123; 不能将number类型分配给boolean类型

// 数值类型
let num: number = 123;
// num = 'abc'; 不能string将类型分配给number类型
num = 0b1111011;  // 二进制
num = 0o173;  // 八进制
num = 0x7b; //十六进制

// 字符串类型
let str: string;
str = 'abc';
str = `数值是：${num}`;
console.log(str);

// 数组类型
// 方式一
let arr: number[] = [1,2,3];
// arr = ['aa',1]; 不能string将类型分配给number类型
// 方式二
let arr2: Array<number> = [3,4,8];
let arr3: (string | number)[] = [3, 'dsds', 5]; //  (string | number)括号不能省去
let arr4: string | number [];
// arr4 = ['sss','ss']; arr4要么是字符串类型，要么是number类型数组
arr4 = 'hello';
arr4 = [2, 3, 4];

// 元组类型
let tuple: [string, number, boolean];
tuple = ['aa', 344, true];
/*
不能将类型“[string, number, false, number]”分配给类型“[string, number, boolean]”。
源具有 4 个元素，但目标仅允许 3 个。ts(2322)
tuple = ['aa', 344, false, 45];
*/

// 枚举类型
/* enum Roles {
  SUPER_ADMIN, // 0
  ADMIN,  // 1
  USER // 2
} */
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 3,
  USER = 8
}
console.log(Roles.SUPER_ADMIN, Roles.ADMIN, Roles.USER); // 1 3 8
enum Roles2 {
  SUPER_ADMIN,
  ADMIN = 3,
  USER
}
console.log(Roles2.SUPER_ADMIN, Roles2.ADMIN, Roles2.USER); // 0 3 4

// any类型 (任何类型) 能不用就不用
let value: any;
value = 1;
value = 'safer';
value = true;
value = [1, 'sss'];

// void类型 (什么类型都不是) 函数无返回值
const text = (text: string): void => {
  console.log(text);
}
// text() 应有 1 个参数，但获得 0 个。
text('sss');
let v: void;
v = undefined; // 能将类型“undefined”分配给类型“void”。
// v = null; 不能将类型“null”分配给类型“void”。注释tsconfig.json文件里 "strict": true,此处就不会报错！！！

// null undefined
let u: undefined;
u = undefined;
// u = 123; 不能将number类型分配给类型“undefined”。
let n: null;
n = null;
// n = 'sss'; 不能将string类型分配给类型“null”。
// 若是开启tsconfig.json文件里"strictNullChecks": true,那么此处就不能将undefined、null赋值给num变量
// num = undefined;
// num = null;

// never类型
// 抛错
const errorFunc = (msg: string): never => {
  throw new Error(msg);
}
// errorFunc('error...');
// 死循环
const infiniteFunc = (): never => {
  while(true) {}
}
// let neverVar = (() => {
//   while(true) {}
// })();
// neverVar = 123; 不能将类型“number”分配给类型“never”。
// num = neverVar; // 可以将never类型分配给number类型

// object
let obj = {
  name: 'lison'
}
let obj2 = obj;
obj2.name = 'l';
console.log(obj);
const getObject = (obj: object) => {
  console.log(obj);
}
// getObject(111); 类型“number”的参数不能赋给类型“object”的参数。
getObject(obj2);

// 类型断言
// 类型“number”上不存在属性“length”。
// const getLength = (target: string | number): number => {
//   if (target.length || target.length === 0) {
//     return target.length;
//   } else {
//     return target.toString().length;
//   }
// }
// jsx的时候只能用as
const getLength = (target: string | number): number => {
  if ((<string>target).length || (target as string).length === 0) {
    return (<string>target).length;
  } else {
    return target.toString().length;
  }
}

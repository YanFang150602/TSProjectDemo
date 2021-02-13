/* const getArray = (value: any, times: number = 5): any[] => {
  return new Array(times).fill(value);
}
console.log(getArray(2)); */

// <T>定义泛型，value的类型与<T>里的T保持一致，返回的类型也保持一致
const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value);
}
// 指定泛型为number
getArray<number>(2)
// getArray<number>('abc') 不能将string类型分配给number类型

const getArray2 = <T, U>(x: T, y: U, times: number = 5): Array<[T, U]> => {
  return new Array(times).fill([x, y]);
}
// 类型推断会根据参数推断出类型
getArray2(1, 'a').map(item => {
  console.log(`${item[0].toFixed()} - ${item[1].length}`);
  // console.log(`${item[0].length} - ${item[1].toFixed()}`);
})

// 泛型使用场景
// 函数类型
let getData: <T>(x: T, y: number) => T[];
/* 
Type 'T' is not assignable to type 'number'.
getData = (x: number, times: number): number[] => {
  return new Array(times).fill(x);
} */
getData = (x: any, times: number): any[] => {
  return new Array(times).fill(x);
}
// 类型别名
type getData2 =  <T>(x: T, y: number) => T[];
getData = (x: any, times: number): any[] => {
  return new Array(times).fill(x);
}
// 接口
interface GetData<T> {
  (x: T, y: number): T[],
  arr: T[]
}

// 泛型约束
// 使用extneds实现泛型约束
interface ValueWithLength {
  length: number
}
const getValue = <T extends ValueWithLength>(x: T, times: number): T[] => {
  return new Array(times).fill(x);
}
// getValue(123, 3); Argument of type 'number' is not assignable to parameter of type 'ValueWithLength'.
getValue('123', 2);
getValue({length: 3}, 3);

// 在泛型约束中使用类型参数
const getProps = (obj, propName) => {
  return obj[propName];
}
const obj7 = {
  a: 'a',
  b: 'b'
}
getProps(obj7, 'a');
getProps(obj7, 'c');
// 使用泛型
const getProps2 = <T, K extends keyof T>(obj: T, propName: K) => {
  return obj[propName];
}
getProps2(obj7, 'a');
// getProps2(obj7, 'c'); Argument of type '"c"' is not assignable to parameter of type '"a" | "b"'.
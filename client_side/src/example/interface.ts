/* const getFullName = ({firstName, lastName}) => {
  return `${firstName} ${lastName}`;
}
getFullName({firstName: 'li', lastName: 18}); 18不是我们想要的数据类型 */

/**
 *  1、利用接口定义对象的结构
 */

interface NameInfo {
  firstName: string,
  lastName: string
}
const getFullName = ({firstName, lastName}: NameInfo): string => {
  return `${firstName} ${lastName}`;
}
// getFullName({firstName: 'li', lastName: 18}); 不能将类型“number”分配给类型“string”。
console.log(getFullName({firstName: 'li', lastName: 'son'}));

// 可选属性? 多余属性 只读属性
interface Vegetables {
  color?: string,   // 可选属性?
  readonly type: string, // 只读属性
  // [attr: string]: any   // 方式二：利用索引签名
}
const getVegetables = ({color, type}: Vegetables): string => {
  return `A ${color ? (color + ' ') : ''}${type}`;
}
console.log(getVegetables({type: 'tomato'}));
console.log(getVegetables({color: 'blue', type: 'tomato'}));
/*
多余属性： 多个size属性，报错
console.log(getVegetables({type: 'tomato', color: 'blue', size: '2'}));
对象文字可以只指定已知属性，并且“size”不在类型“Vegetables”中

三种解决方式
方式一：使用类型断言，绕过多余属性检查 {type: 'tomato', color: 'blue', size: '2'} as Vegetables
方式二：利用索引签名  [attr: string]: any
方式三： 声明个veg变量，利用类型兼容性  veg = {type: 'tomato', color: 'blue', size: '2'}
 */
console.log(getVegetables({type: 'tomato', color: 'blue', size: '2'} as Vegetables)); // 方式一：使用类型断言，绕过多余属性检查
// console.log(getVegetables({type: 'tomato', color: 'blue', size: '2'})); // 方式二：利用索引签名
const veg = {type: 'tomato', color: 'blue', size: '2'};
console.log(getVegetables(veg)); // 方式三： 声明个veg变量，利用类型兼容性
const veg2: Vegetables = {
  type: 'potato'
}
// veg2.type = 'fish'; 无法分配到 "type" ，因为它是只读属性。

/**
 *2.利用函数定义接口
 */
interface AddFunc｛
  （num: number, num2: number): number
｝
const add: AddFunc = (n1, n2) => n1 + n2;

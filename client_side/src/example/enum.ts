/**
 * 数值枚举
 */
/* enum Status {
  Uploading,
  Success,
  Failed
}
enum Status {
  Uploading = 3,
  Success = 2,
  Failed =5
} */
const test = 1;
const getIndex = () => 2;
enum Status {
  Uploading = 3,
  Success = test,
  Failed = getIndex()
}
// console.log(Status.Uploading);
// console.log(Status.Success);
// console.log(Status.Failed);
// console.log(Status[3]); // Uploading
// console.log(Status[1]); // Success
// console.log(Status[2]); // Failed

/**
 * 字符串枚举
 */
// 枚举里的值不能使用里一个枚举里的值
enum Message{
  Error = 'Sorry, error.',
  Success = 'Hoho, success!',
  Failed = Error
}
console.log(Message.Success); // Hoho, success!
console.log(Message.Failed); // Sorry, error.

/**
 * 异构枚举（既包含字符串，也包含数值）
 */
enum Result{
  Error = 'Sorry, error.',
  Success = 'Hoho, success!',
  Failed = 0
}

/**
 * 枚举里的成员作为类型来使用
 * 条件：
 * enum E { A }, 所有成员未赋值
 * enum E { A = 'a'}, 所有成员值为字符串
 * enum E { A = 1}, 所有成员值为数值
 * 三个条件中任意一个！！！
 */

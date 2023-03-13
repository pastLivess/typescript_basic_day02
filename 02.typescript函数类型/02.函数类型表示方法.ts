// 函数类型表达式
// 格式 (参数列表)=>返回值
type barType = (num1: number) => number
const bar: barType = function (age: number): number {
  return 123
}
export {}

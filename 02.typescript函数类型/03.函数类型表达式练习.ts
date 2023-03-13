// 函数类型表达式 要求函数传入2个参数都为number 且返回值是number
type calcFnType = (num1: number, num2: number) => number

function calc(calcFn: calcFnType) {
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1, num2)
  console.log(res)
}

function sum(num1: number, num2: number) {
  return num1 + num2
}
function foo(num1: number) {
  return num1
}
calc(sum)
calc(foo)
export {}

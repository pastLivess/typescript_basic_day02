type CalcType = (num1: number, num2: number) => number
function foo(calcFn: CalcType) {
  calcFn(10, 20)
}

foo(function (num1, num2) {
  return 123
})

const names = [1, 2, 3]
// 传入回调参数时,不需要必须把不用的参数传进去,ts不做校验
names.forEach((item) => {
  console.log(item)
})
export {}

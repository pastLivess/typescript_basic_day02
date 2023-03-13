// 函数类型表达式
type barType = (num1: number) => number

// 函数的调用签名(从对象角度来看待这个函数,也可以有其他属性)
interface IBar {
  name: string
  age: number
  // 函数可以使用:函数调用签名
  (num1: number): number
}

const bar: IBar = (num1: number): number => {
  return 123
}
bar.name = '123'
bar.age = 18

bar(123)

/* 
  1.如果只是描述函数可以被调用而没有自己的属性,使用函数表达式
  2.函数作为对象情况下,还有其他的属性,使用函数调用签名
*/

export {}

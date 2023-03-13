// 1.有默认值情况下,参数类型注解可以省略
function foo(x: number, y = 100) {}

foo(10)

foo(10, undefined) // 有默认值的参数,可以接受undefined(了解即可)

export {}

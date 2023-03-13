// 此处y是可选参数
// 此处y的可选参数类型是 number | undefined

function foo(x: number, y?: number) {}

foo(10)
foo(10, 20)

export {}

// 类型别名 使用type关键字 多个地方共用到一个类型,直接复用
type numType = number

const num: numType = 10
const num2: numType = 30

type idType = string | number

function foo(id: idType) {}
let id: idType = 1
id = '123'

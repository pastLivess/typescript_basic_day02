// 回顾联合类型
type idType = number | string

interface Ikun {
  name: string
  age: number
}

interface iCoder {
  coding: () => void
}

// 交叉类型的使用场景 要满足2个接口所要的类型注解
// 而不是说同时满足2种数据类型 在js中是不可能的
// 交叉类型 需要同时满足两种属性
// type idType2 = number & string 无意义

const info: Ikun & iCoder = {
  name: '张三',
  age: 20,
  coding() {},
}

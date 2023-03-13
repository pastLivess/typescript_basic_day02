interface IPerson {
  name: string
  age: number

  // 可选
  friend?: {
    name: string
  }
}

const info: IPerson = {
  name: 'info',
  age: 20,
}
console.log(info.friend?.name) // 访问可能为空的属性可以选择用可选链

// 属性赋值 左边不能写可选链的
// info.friend?.name = 'friend'
// 方案一 类型缩小
if (info.friend) {
  info.friend.name = 'friend'
}
// 方案二:非空类型断言 使用! 告诉ts解析器,该属性一定是有值的，不用进行检测(有风险)
info.friend!.name = 'friend'
export {}

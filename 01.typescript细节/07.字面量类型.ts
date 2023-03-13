// 字面量类型 使用const定义 因为const的值是不可变的
const name: 'why' = 'why'
// 单个字面量类型使用没意义
let age: 18 = 18

// 多个字面量类型联合起来
type Direction = 'left' | 'right' | 'up' | 'down'
// 定义的变量只能使用这四个方向其中一个
const d1: Direction = 'right'

//
type methodType = 'GET' | 'POST'
// method传入的值必须是GET 或者POST 因为写字符串类型是不严谨的
function request(url: string, method: methodType) {}

request('http://codercba.com/api/aaa', 'POST')
// const info = {
//   url: 'xxxx',
//   method: 'POST',
// }
// 下面做法错误 ,info.method获取的是string类型
// request(info.url, info.method)
// 解决方案一 info.method进行类型断言
// request(info.url, info.method as 'POST')
// 解决方案二 直接给传入的对象中的值定义类型
const info: {
  url: string
  method: 'POST'
} = {
  url: 'xxxx',
  method: 'POST',
}
request(info.url, info.method as 'POST')
export {}

// 1.type的使用访问更广 可以声明任何类型
// 2.type不能多次声明同名类型
type numType = number
type arrType = any[]

// 1.interface只能用来声明对象类型
// 2.interface 允许多次声明同一个接口名称 且他们都要有效

interface objType {
  name: string
  age: 18
}

interface objType {
  height: string
}
const obj: objType = { name: '张三', age: 18, height: '188' }

// 3.interface 允许继承
interface IPerson {
  name: string
  age: number
}
// Ikun继承至IPerson
interface Ikun extends IPerson {
  hobby: string[]
}

const ikun1: Ikun = { name: '123', age: 20, hobby: ['唱', '跳', 'rap'] }
// 4.interface可以被类实现 后面面向对象再讲
// class Person implements IPerson {}
export {}

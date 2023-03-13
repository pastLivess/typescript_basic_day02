# day2

## 类型别名(type)

~~~~tsx
// 类型别名 使用type关键字 多个地方共用到一个类型,直接复用
type numType = number

const num: numType = 10
const num2: numType = 30

type idType = string | number

function foo(id: idType) {}
let id: idType = 1
id = '123'
~~~~

![image-20230313135158049](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313135158049.png)

![image-20230313135203418](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313135203418.png)

## 接口声明(interface)

![image-20230313135707653](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313135707653.png)

## type和interface的区别

### type(类型别名)

~~~~tsx
// 1.type的使用访问更广 可以声明任何类型
// 2.type不能多次声明同名类型
type numType = number
type arrType = any[]

~~~~

### interface(接口声明)

~~~~tsx

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

~~~~

### 	总结

 type 使用场景更广 适用于定义任何数据类型

interface 用来定义对象类型数据,且可以被继承和被类实现

## 交叉类型

![image-20230313144028037](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313144028037.png)

~~~~tsx
// 回顾联合类型 满足一种即可
type idType = number | string

interface Ikun {
  name: string
  age: number
}

interface iCoder {
  coding: () => void
}

// 交叉类型的使用场景 要满足2个以上接口所要的类型注解
// 而不是说同时满足2种数据类型 在js中是不可能的
// 交叉类型 需要同时满足两种属性
// type idType2 = number & string 无意义

const info: Ikun & iCoder = {
  name: '张三',
  age: 20,
  coding() {},
}

~~~~

## 类型断言(as)

~~~~tsx
// 获取DOM 返回一个联合类型 根据类型推导它会返回 元素类型 | null
// 而类型断言可以让我们直接坚信返回的就是这个类型
// 语法: as 类型
const imgEl = document.querySelector('img') as HTMLImageElement

imgEl.src = '123'
imgEl.title = '123'

// 类型断言规则
const age: number = 18

// const age2 = age as string 错误做法 age是number类型 不能断言为string了

export {}

~~~~

## 非空类型断言

~~~~tsx
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

~~~~

## 字面量类型的使用

![image-20230313160004574](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313160004574.png)

![image-20230313160019238](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313160019238.png)

~~~~tsx
// 字面量类型 使用const定义 因为const的值是不可变的
const name: 'why' = 'why'
// 单个字面量类型使用没意义
let age: 18 = 18

// 字面量类型的使用场景

// 多个字面量类型联合起来
type Direction = 'left' | 'right' | 'up' | 'down'
// 定义的变量只能使用这四个方向其中一个
const d1: Direction = 'right'


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

~~~~

## 类型缩小

![image-20230313160304292](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313160304292.png)

![image-20230313160310849](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313160310849.png)

~~~~tsx
// typeof 类型缩小
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.length)
  } else {
    console.log(console.log(id))
  }
}

printID(1)

// 平等缩小
type Direction = 'left' | 'right' | 'up' | 'down'
function switchDirection(direction: Direction) {
  if (direction === 'left') {
    console.log('left', direction)
  } else if (direction === 'right') {
    console.log('right', direction)
  } else if (direction === 'up') {
    console.log('up', direction)
  } else {
    console.log('down', direction)
  }
}

// instanceof 判断
function printDate(date: string | Date) {
  // 判断是否是Date实例
  if (date instanceof Date) {
    console.log(date.getTime())
  }
}

// in操作符
const obj = { age: 18 }
if ('age' in obj) {
  console.log(obj['age'])
}
export {}

~~~~

# ts中函数

## 函数类型表达式

### 什么是函数的类型

~~~~tsx
// age: number表示参数的类型 :number 表示返回值类型
function foo(age: number): number {
  return 123
}

// 函数表达式
const bar = function (age: number): number {
  return 123
}

~~~~

### 函数类型表示方法

~~~~tsx
// 函数类型表达式
// 格式 (参数列表)=>返回值
type barType = (num1: number) => number
const bar: barType = function (age) {
  return 123
}
export {}


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

~~~~

### 函数参数个数问题

~~~~tsx

type calcFnType = (num1: number, num2: number) => number

function calc(calcFn: calcFnType) {
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1, num2)
  console.log(res)
}
// 虽然里面调用calcFn函数并且要求我们传入2个参数
// 但是我们这里只返回一个123 却没有报错, 这是由ts内部规则决定的
function foo(num1, num2) {
  return 123
}

calc(foo)

// 类似于下面的例子
const names = [1, 2, 3]

// 传入回调参数时,不需要必须把不用的参数传进去,ts不做校验
names.forEach((item) => {
  console.log(item)
})
export {}

~~~~

### 函数调用签名的写法

~~~~tsx
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

~~~~

![image-20230313170316717](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313170316717.png)

### 构造函数签名的写法(少用)

![image-20230313171753293](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313171753293.png)

~~~~tsx
class Person {}
interface ICTORPerson {
  new (): Person
}

function factory(fn: ICTORPerson) {
  return new fn()
}
factory(Person)

~~~~

### 函数参数的可选类型

~~~~tsx
// 此处y是可选参数
// 此处y的可选参数类型是 number | undefined

function foo(x: number, y?: number) {}

foo(10)
foo(10, 20)

export {}

~~~~

### 函数参数设置默认值的情况

~~~~tsx
// 1.有默认值情况下,参数类型注解可以省略
function foo(x: number, y = 100) {}

foo(10)

foo(10, undefined) // 有默认值的参数,可以接受undefined(了解即可)

export {}
~~~~

### 函数参数剩余参数

~~~~tsx
function foo(...args: (string | number)[]) {}

foo(1, 2, 3, 'a')

export {}

~~~~

### 函数的重载和编写方式

![image-20230313173030271](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313173030271.png)

~~~~tsx
// 只能将两个数组/字符串进行相加
function add(arg1: string, arg2: string): string
function add(arg1: number, arg2: number): number
function add(arg1, arg2) {
  return arg1 + arg2
}

add('1', '2')
add(1, 2)
export {}

~~~~

### 函数的重载和联合类型选择

![image-20230313173309474](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313173309474.png)

### this内置工具的使用(实际业务很少)

![image-20230313174151358](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313174151358.png)

![image-20230313174758608](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313174758608.png)

## ts学习等级的划分

![image-20230313180155028](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313180155028.png)

​	

# ts面向对象

## 认识类

![image-20230313180848524](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313180848524.png)

~~~~tsx
class Person {
  // ts中类需要在这里声明成员属性 否则会报错
  name = ''
  age = 0
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  eating() {
    console.log(this.name)
  }
}

const p1 = new Person('张三', 18)
const p2 = new Person('李四', 22)

~~~~

## 类的继承(与js一样)

![image-20230313182047491](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313182047491.png)

## 成员修饰符

![image-20230313182111147](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230313182111147.png)

~~~~tsx
class Person {
  // public 是公共的方法
  public name
  // protected 只能在当前类或子类中被访问
  protected age
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  // 私有方法只有在类内部才能被访问
  private eating() {
    console.log('吃东西', this.name)
  }
}

const p = new Person('张三', 22)
// p.eating() 报错
// console.log(p.name, p.age)

class Student extends Person {
  constructor(name: string, age: number) {
    super(name, age)
  }
  studying() {
    console.log(this.name, this.age)
  }
}
~~~~

# 总结

## 一. 完成课堂所有的代码





## 二. 什么是联合类型和交叉类型，它们有什么区别？（面试题）

联合类型 -> 

进行类型注解的时候需要满足其中一种类型 使用 |连接

~~~~tsx
let id:string |number = '1'
id = 123
id = '123'
~~~~

交叉类型 ->

进行类型注解的时候需要同时满足两种要求(一般是接口) 使用&连接

~~~~tsx
interface objType {
  name:string
  age:number
}
interface objType2 {
  height:number
}
// 定义的对象需要同时满足两种接口定义的类型 必须有name,age，height 否则报错
const obj:objType&objType2 = { 
  name:'张三',
  age:10,
  height:1.33
}
~~~~



## 三. 类型别名（Type）和接口类型（Interface）有什么关系和区别？（面试题）

类型别名Type

​	1.类型别名适合用来定义任意类型的注解

~~~~tsx
	type num = number

	let num1:num=123
~~~~

接口类型Interface

​	**1.接口类型适合只能用来定义对象类型的注解**

~~~~tsx
interface objType {

	name:string,

	age:number

}

let obj:objType ={name:'张三',age:20}
~~~~

2.**接口类型可以继承,继承之后的StudentType需要同时满足2种接口的类型注解**

~~~~tsx
interface PersonType {

	name:string,

	age:number

}
interface StudentType extends PersonType {
	score:number
}

const s1: StudentType = {
  name: '张三',
  age: 20,
  score: 99,
}
// 4.interface可以被类实现 后面面向对象再讲
// class Person implements IPerson {}
~~~~



## 四. 什么是TypeScript的类型缩小？有什么作用？

类型缩小->用来缩小类型的范围->进行判断

例我们使用unknown类型,需要对它进行类型缩小,否则直接进行操作,是会报错的

一共有几个关键字或者操作符可以使用 -> typeof instanceof in  === 

~~~~tsx
type printType = string | number
function print(a:printType){
    if(typeof a ==='string'){
        console.log(a.length)
    }else {
        consoloe.log(a)
    }
}
print('1')
print(2)
~~~~





## 五. 函数有自己的类型吗？如何定义？什么是函数调用签名？什么是函数构造签名？

~~~~tsx
// 函数定义类型 表示该函数接收一个参数,且返回值是number类型
type fooType = (num1:number) => number

// 函数调用签名 给函数加上之后 表示该函数可以有自己的属性,且可以调用方法 如果没有就会报错
interface IFoo{
    name:string,
    age:number
    ():void
}
function foo:IFoo(num1:number,num2:number){}
foo.name='张三'
foo.age=30

// 函数构造签名 new之后会产生一个新对象
class Person {
    
}
interface IFoo2{
    name:string,
    age:number
    new ():Person
}
function foo:IFoo2(){
    return new Person()
}
~~~~

## 六. 什么是函数的重载，函数的重载有什么作用？

~~~~tsx
函数的重载 可以让我们在使用函数的时候更佳安全
// 此处进行函数重载 add函数只允许传入两种相同类型(string或者number)的值进行相加
function add(a:number,b:number):number
function add(a:string,b:string):string
function add(a,b){
    return a+b
}
add(1, '2') // 当传入的值不是统一的数值和字符串 会报错
~~~~



## 七. TypeScript中的函数如何绑定this？有哪些this相关的工具？





## 八. TypeScript中类的定义有什么特点？什么是属性修饰符？

ts中的类定义后需要定义成员信息否则会报错

~~~~ts
class Person {
    // 定义成员信息
    name
    age
    constructor(name,age){
        this.name=name
        this.age=age
    }
}
~~~~

ts中属性修饰符有

-  public 公共的,在哪里都可以被访问
- provite 私有的,仅在内部进行访问
-  protected 受保护的,仅在内部和子类中被访问
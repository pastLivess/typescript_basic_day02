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

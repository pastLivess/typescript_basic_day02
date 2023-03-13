class Person {
  // ts中类需要在这里声明成员属性
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

export {}

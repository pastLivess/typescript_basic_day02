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

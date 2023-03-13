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

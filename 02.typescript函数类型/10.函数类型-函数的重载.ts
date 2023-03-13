// 只能将两个数组/字符串进行相加
function add(arg1: string, arg2: string): string
function add(arg1: number, arg2: number): number
function add(arg1, arg2) {
  return arg1 + arg2
}

add('1', '2')
add(1, 2)
export {}

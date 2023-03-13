// type和interface都可以用来给对象定义类型
type PointType = {
  x: number
  y: number
  z?: number
}
// interface 是使用声明的方式
interface PointType2 {
  x: number
  y: number
  z?: number
}
// 他们俩的区别 大部分情况下他们两个可以任意选择使用
function printCoordinate(point: PointType) {}
function printCoordinate2(point: PointType2) {}

export {}

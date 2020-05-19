# 2-5 静态类型的深度理解
当一个变量是静态类型时，就意味着这个变量的类型不能修改，也意味着这个变量的属性和方法也是固定的了。
```typescript
interface Point {
  x: number,
  y: number
}
const point: Point = {
    x: 1,
    y: 2
};
console.log(point.x)
console.log(point.y)
```
如上所示：point是一个Point的类型，那么它就只有x和y两个属性。   
同时编辑器对我们也会又很友好的提示，我们可以更直观的看到变量或者类型的属性有哪些。
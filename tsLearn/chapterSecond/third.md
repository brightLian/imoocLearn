# 2-3 TypeScript带来了什么优势
## 开发过程中发现潜在的问题
比如可以发现我们在开发过程中的一些错误，如调用方法传参错误、变量类型声明错误、隐式类型判断带来的错误等。如：
```js
function demo(data) {
    return Math.sqrt(data.x **2 + data.y ** 2);
}
demo();
```
这段代码在书写的时候是不会报错的，但是当在运行在浏览器端或node环境中就会报错了   
TS就帮我们很好的解决了这个问题：
```typescript
function demo(data) {
    return Math.sqrt(data.x **2 + data.y ** 2);
}
demo();
```
::: danger
TS2554：Expected 1 arguments, but got 0
:::

## 更友好的编辑器自动提示
当你使用目前主流的编辑器（VsCode、webStorm等），会给出更友好的提示。

## 代码语义更清晰
当使用TS时，通过静态类型的定义可以更好的理解。比如上面的那个事例，我们可以很清楚的知道函数参数data里面包含了 x 和 y 两个属性。  
同时也可以把代码类型的定义放到外边，如：
```typescript
interface Point {
    x: number,
    y: number
}

function demo(data: Point) {
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

demo({x: 1, y: 2});
``` 
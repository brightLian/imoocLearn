# 2-2 TS的定义
## 一个JS的超集
TypeScript是JavaScript的超集，凡在JavaScript中可以使用的语法，在TypeScript中都可以使用。 
  
## 有它自己的类型
TypeScript自己的类型指的是静态类型，而JavaScript语言的类型确实动态类型。  
这也就意味着，当我们声明一个变量的类型后，这个类型就不能在更改了（一般情况下）。我们可以看下面的例子：
```typescript
let a = 123;
a = '123'
```
::: danger
Type '123' is not assignable to type 
:::
但是你可以更改a为其他的数字，我们上边这里的其实是简写的，实际的语法应该是：
```typescript
let a: number = 123;
a = 456; // 这是被允许的
```

## 编译成JS后运行
TypeScript的代码是在浏览器中无法直接运行的，它会被编译成普通的JavaScript后才可以运行。比如：
```typescript
interface Person {
    name: string
}

const one: Person = {
    name: 'brightLian'
}
```
会被编译成如下代码：
```js
"use strict";
const one = {
    name: 'brightLian'
};

```
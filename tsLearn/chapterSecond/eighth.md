# 2-8 函数相关类型
### 函数参数和返回值要注解
在实际的开发中，当对函数的参数进行类型注解后，函数的返回值也就确定了，但是函数的参数和返回值最好可以加上类型注解的形式。可以方便阅读和理解。
```typescript
function add(first: number, second: number): number {
    return first + second
}

const total = add(1, 2);
```

### 函数返回值void
当函数无返回值时，通常情况给定为void。当你再return时就会报错了。
```typescript
function sayHello(): void {
    console.log('Hello')
}
```

### 函数返回值never
当函数永远不可能执行到最后时，通常情况下给定为never。   
```typescript
function errorEmitter():never {
    throw new Error()
    console.log(1111)
}
```

### 函数参数解构赋值
很多情况在我们使用函数的时候，遇到传进来的参数是一个对象，会用到解构赋值的形式。   
我们通常采用这种写法，前面函数参数做解构，后面的参数类型也需要做解构：
```typescript
function add({ first, second }: { first: number, second: number }): number {
  return first + second
}
const total = add({ first: 1, second:2 })
```
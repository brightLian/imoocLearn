# 4-3 联合类型和类型保护

### 联合类型
我们之前也定义过联合类型，使用|符号：
```typescript
interface Bird {
    fly: boolean,
    sing: () => {}
}

interface Dog {
    fly: boolean,
    dark: () => {}
}

function trainAnial(animal: Bird | Dog) {
    animal.fly;
    animal.dark();
}
```
我们定义了两个接口 Bird 和 Dog，它们都有共同的 fly 属性，我们可以直接调用。    
但是当我们调用 dark() 方法时，因为你传入的是联合类型，TS 不清楚你是否有这个方法，所以会报错：
::: danger
TS2339: Property 'dark' does not exist on type 'Bird | Dog'.  
Property 'dark' does not exist on type 'Bird'.
:::

### 类型保护
那我们如何才能调用到联合类型中，某一项的属性呢？
```typescript
interface Bird {
    fly: boolean,
    sing: () => {}
}

interface Dog {
    fly: boolean,
    dark: () => {}
}

function trainAnial(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing()
    } else {
        (animal as Dog).dark()
    }
}
```
上述使用的方法就不会报错，他这种调用方式叫做类型断言。    
那么是否还有其他方式呢？
```typescript
function trainAnialSecond(animal: Bird | Dog) {
    if('sing' in animal) {
        animal.sing();
    } else {
        animal.dark();
    }
}
```
这种叫做使用 in 语法来做类型保护。   
我们在看一种类型保护的方式：
```typescript
function add(first: string | number, second: string | number) {
    if (typeof first == "string" || typeof second == 'string') {
        return `${first}${second}`
    } else {
        return first + second
    }
}
```
这种叫做使用 typeof 语法来做类型保护。
我们再看一种类型保护的方式：
```typescript
class NumberObj {
    count: number = 1;
}

function addSeconf(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    } else {
        return 0
    }
}
```
这种叫做使用 instanceof 语法来做类型保护。
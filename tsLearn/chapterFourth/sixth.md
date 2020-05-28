# 4-6 类中的泛型以及泛型类型
我们上节课了解到了什么是泛型，以及在函数中如何使用泛型。     
这节课我们来了解下类中的泛型。    

### 类的泛型
我们看这么个例子：
```typescript
class DataManager {
    constructor(private data: string[] | number []) {}
    getItem(index: number) {
        return this.data[index];
    }
}

const data1 = new DataManager(['1']);
data1.getItem(0);
```
现在 data 的类型可能是 string 类型的数组，或者 number 类型的数组。     
那么假设 data 的类型还可能是其他类型，我们是不是就要写很长的联合类型？    
这时候类的泛型就派上了作用：
```typescript
class DataManager<T> {
    constructor(private data: T[]) {}
    getItem(index: number): T {
        return this.data[index];
    }
}

const data1 = new DataManager<number>([1]);
data1.getItem(0);
```
这就是类里面的一个最基础的泛型。   
    
但是如果我们想指定数组的某一项都含有一个属性，这要怎么办呢？   
这时候就需要使用泛型继承了。
```typescript
interface Item {
    name: string
}
class DataManager<T extends Item> {
    constructor(private data: T[]) {}
    getItem(index: number): string {
        return this.data[index].name;
    }
}

const data1 = new DataManager([{name: 'lml'}]);
data1.getItem(0);
```
分析：我们定义了一个类，我们不知道这个类是什么类型，所以使用了泛型。但是这个泛型未来会对应一个具体的类型，这个具体的类型一定要有 Item 里面
所有的东西。

### 泛型类型
之前我们所有的例子在指定泛型的类型的时候，它可以是任意类型。   
那么假设我们给定的泛型的类型只能是某几种，这时候要怎么办呢？
```typescript
class DataManager<T extends number|string> {
    constructor(private data: T[]) {}
    getItem(index: number): T {
        return this.data[index];
    }
}

const data1 = new DataManager([1, 2, 3]);
```
我们还是使用 extends 语法，来指定泛型的类型。

### 使用泛型声明类型
如何使用泛型作为类型注解：
```typescript
function hello<T>(param: T) {
    return param
}
const func2: <T>(param: T) => T = hello;
func2('123');
```
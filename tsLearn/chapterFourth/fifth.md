# 4-5 函数泛型

**泛型：泛指的类型。**    
我们只有在具体用的时候，才知道函数的泛型类型是什么。

### 泛型的定义   
我们看一个下面的例子：
```typescript
function join(first: string | number, second: string | number) {
    return `${first}${second}`
}

join(1, 1);
join(1, '1');
join('1', 1);
join('1', '1');
```
我们可以任意组合 string 和 number 两种类型，但是如果我们想要前后两个变量传递的类型相同要怎么办呢？    
针对一些不确定的类型时，这时候我们就需要使用泛型：
```typescript
function join<ABC>(first: ABC, second: ABC) {
    return `${first}${second}`
}

join<string>('1', '1');
join<number>(1, 1);
```
我们随便定义了一个泛型为ABC，然后在调用 join 方法的时候指定这个泛型为 string 或者 number 类型。     
那我们在看下复杂类型的泛型：
```typescript
function map<ABC>(params: Array<ABC>) {
    return params;
}
map<string>(['1', '2', '3']);
```
上述例子定义了一个泛型为 ABC，然后指定了 params 为一个数组，数组的类型为 ABC。     
当我们调用 map 方法的时候执行了泛型 ABC 的类型为 string，那么 params 的类型就是一个 string 类型的数组。   

### 泛型的名称
泛型的名称可以是任意的。   
但是我们常见的泛型名称使用 T，也就是 type 的简写。

### 多个泛型的定义
泛型里面不仅可以定义一个，也可以定义多个。
```typescript
function join<T, P>(first: T, second: P) {
    return `${first}${second}`
}

join<string, number>('1', 1);
```
上面的例子就是定义了两个泛型，所以当我们调用 join 方法是需要传递两个类型。

### 泛型推断
如果我们定义了泛型，但是在函数调用的时候不显示的执行类型会怎么样呢？
```typescript
function join<T, P>(first: T, second: P) {
    return `${first}${second}`
}

join('1', 1);
```
实际它也不会报错，typeScript 的底层会做类型推断。
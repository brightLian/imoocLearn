# 2-6 基础类型和对象类型
## 简单介绍
TypeScript里面主要分为两种类型：基础类型和对象类型。
```typescript
// 基础类型
let age: number = 20;
let me: string = 'brightLian';
let isMe: boolean = true;
let sym1: symbol;
let without: null = null;
let und: undefined = undefined;

// 对象类型
let brightLian: {
    name: string,
    age: number
} = {
    name: 'brightLian',
    age: 20
};

let numbers: number[] = [1, 2, 3];

class Person {}
let bright: Person = new Person();

let getTotal:  () => number = () => {
    return 123
};
```
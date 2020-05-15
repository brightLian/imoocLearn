# 2-7 类型注解和类型推断
## 类型注解
我们来告诉TypeScript变量是什么类型。
如下：我们声明count变量时，就定义了它的类型为number类型。
```typescript
let count: number;
count = 123;
```

## 类型推断
TypeScript会自动的尝试分析变量的类型。
如下：我们声明并赋值了一个变量
```typescript
let countInference = 123;
countInference = 'BrightLian';
```
::: danger
TS2322: Type 'BrightLian' is not assignable to type 'number'
:::
如果TypeScript能够自动分析变量类型，我们什么也不需要做。
如果TypeScript无法分析变量类型的话，我们就需要使用类型注解。

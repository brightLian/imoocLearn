# 2-10 数组和元组
## TypeScript中的数组
**当数组中只有一种数据类型的时候，我们采用如下方式：**
```typescript
const arr1: number[] = [1, 2, 3];
```
**当数组中有多种数据类型的时候，我们采用｜进行定义：**
```typescript
const arr2: (number | string)[] = [1, 2, 3, 'brightLian'];
const arr3: (number | string | boolean)[] = [1, 2, 3, 'brightLian', true]
```
**当数组中的数据类型为对象时，我们采用如下方式：**
```typescript
const arr4: {name: string, age: number}[] = [
    {
        name: 'brightLian',
        age: 20
    }
]
```
**也可以采用类型别名的方式：**
```typescript
type User = { name: string, age: number }
const arr5: User[] = [
    {
        name: 'xxs',
        age: 18
	}
]
```

## TypeScript中的元祖
元祖：我们知道数组中元素的数据类型都一般是相同的（可以不同），如果存储的元素数据类型不同，则需要使用元组。   
当数组的长度是固定的，并且数据中每一项的类型也是固定的时候，这个数组就是一个元祖。    
元祖使用场景：例如当读取csv文件时。
```typescript
const teacherInfo: [string, string, number] = ['brightLian', 'male', 20];
```
  
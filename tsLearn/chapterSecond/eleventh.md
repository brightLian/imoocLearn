# 2-11 Interface接口
## 接口和类型别名
**接口：是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。**   
比如当下面的 person 所需要的类型是固定的，我们可以采用接口的形式：
```typescript
interface Person {
    name: string
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
};

const setPersonName = (person: Person, name: string): void => {
    person.name = name;
};
```
我们之前还用过一种形式叫做类型别名，我们可以看下使用类型别名的形式：
```typescript
type Person1 = {
    name: string
}

const getPersonName1 = (person: Person1): void => {
    console.log(person.name)
};

const setPersonName1 = (person: Person1, name: string): void => {
    person.name = name;
};
```
类型别名和接口的区别：   
1、接口不能定义为基础类型，类型别名可以定义成基础类型（string、number等）  
2、我们普遍使用接口的定义形式，只有特殊情况下才会使用类型别名

## 接口中一个属性可有可无
当接口中的一个变量可有可无的时候，我们采用?进行声明
```typescript
interface Person2 {
    name: string,
    age?: number
}
const getPersonName2 = (person: Person2): void => {
    console.log(person.name)
};

const setPersonName2 = (person: Person2, name: string): void => {
    person.name = name;
};

const person2 = {
    name: 'brightLian'
}

getPersonName2(person2);
setPersonName2(person2, 'lml');
```

## 接口中属性只读
当接口中的一个属性是只读的形式（不可以更改），我们采用 readonly 进行声明。   
当我们尝试去更改这个属性的时候，TypeScript 会报错。
```typescript
interface Person3 {
    readonly name: string,
   	age?: number
}

const setPersonName3 = (person: Person3, name: string): void => {
    person.name = name;
};

const person3 = {
    name: 'brightLian'
}

setPersonName3(person3, 'lml');
```
::: danger
TS2540: Cannot assign to 'name' because it is a constant or a read-only property 
:::

## 接口强校验
当传递的参数是一个外部定义的变量的时候 TypeScript 不会进行强校验，但是当传递的参数以字面量的形式 TypeScript 会对传递的内容进行强校验。
```typescript
interface Person4 {
    name: string,
   	age?: number
}

const getPersonName4 = (person: Person4): void => {
    console.log(person.name)
};

const person4 = {
    name: 'brightLian',
    sex: 'male'
}

getPersonName4(person4);
```
我们可以看到上边的例子，当函数接收的内容是一个变量的形式，它的内容可以和接口定义的变量不一致。   
但是以字面量进行传递的时候，TypeScript 会进行强校验，我们可以看下面的例子，他就会报错：
```typescript
interface Person5 {
    name: string,
   	age?: number
}

const getPersonName5 = (person: Person5): void => {
    console.log(person.name)
};

getPersonName5({
    name: 'brightLian',
    sex: 'male'
});
```
::: danger
TS2345: Argument of type '{ name:string; sex: string; }' is not assignable to parameter of type 'Person5' 
:::

## 接口内容不确定
当我们不确定接口内容时，我们直接采用字面量传值的形式就会报错，比如上面的例子。    
那么我们如何处理这种情况呢？
```typescript
interface Person6 {
  name: string,
  age?: number,
  [propName: string]: any
}
const getPersonName6 = (person: Person6): void => {
    console.log(person.name)
};

getPersonName6({
    name: 'brightLian',
    sex: 'male'
});
```
这样写他就不会报错了，表示 Person6 这个类型必须有 name 这个属性，age 属性可有可无，但是可以存在其他属性，并且属性名字是字符串，属性值可以是任意类型。   

## 使用类应用接口
如果一个类想去应用接口，我们使用 implements 这个语法来应用接口。   
但是要求接口里面必须含有类的属性。
```typescript
interface Person7 {
  name: string,
  age?: number,
  [propName: string]: any,
  say(): string
}

class User implements Person7{
  name = 'brightLian';
  say() {
      return 'hello brightLian'
  }
}
```

## 接口之间的继承
接口之间可以通过 extend 互相继承，这就要求新的接口里面需要有老的接口所有的东西，还要有自己新的东西。
```typescript
interface Person8 {
  name: string,
  age?: number,
  [propName: string]: any,
  say(): string
}
// Teacher 继承 Person8 里面的属性
interface Teacher extends Person8 {
    teach(): string 
}

const getPersonName8 = (person: Teacher): void => {
    console.log(person.name)
};
// person8 里面必须含有 Person8 所需要的属性，也要含有 Teacher 所需要的属性
const person8= {
    name: 'brightLian',
    sex: 'male',
    say() {
        return 'hello brightLian'
    },
    teach() {
        return 'hello teach'
    }
}

getPersonName8(person8)
```

## 接口定义函数
接口不只是可以定义对象，它可以定义任何类型。比如函数、数组等。
```typescript
interface SayHi {
   (word: string): string
}

const say: SayHi = (word: string) => {
    return word
}
say('Hi!');
```

## 抽象接口
当很多接口有相同的属性的时候，我们可以通过下面的的方式来把它提取出来。
```typescript
interface Person {
    name: string
}

const getUserInfo = (user: Person) => {
    console.log(user.name)
};

const teacher = {
    name: 'brightLian',
    age: 3
};

const student = {
    name: 'xxs',
    age: 18
};

getUserInfo(teacher);
getUserInfo(student);
```
比如上面的例子，我们就是把 name 这个关键属性提取了出来。
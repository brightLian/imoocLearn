# 2-13 类中的访问类型和构造器
## 访问类型public
public 允许我们在类的内外任意位置进行访问  
如果没有定义访问类型，默认是public类型
```typescript
class Person {
    public name: string;
    sayHi() {
        console.log('hi ' + this.name);
    }
}

const person = new Person();
// 可以在类外被赋值
person.name = 'brightLian';
// 可以在类外被取值
console.log(person.name);
console.log(person.sayHi());
```

## 访问类型private
private 允许我们在类的内部进行访问
```typescript
class Person2 {
    private name: string;
    public sayHi() {
        console.log('hi ' + this.name)
    }
}

const person2 = new Person2();
person.name = 'brightLian';
console.log(person2.name);
console.log(person2.sayHi());
```
::: danger
TS2341: Property 'name' is private and only accessible within 'Person2'
::: 
我们可以看到当我们在类的外部访问 name 时，TypeScript 就会报错。

## 访问类型protected
protected 允许在类内及集成的子类中进行访问
```typescript
class Person3 {
    protected name: string;
    public sayHi() {
        console.log('hi ' + this.name)
    }
}

class Teacher extends Person3{
    public sayBye() {
        console.log('bye' + this.name)
    }
}
```
我们可以看到上面的例子：我们可以在子类中访问父类中的内容，但是同样不能在外部访问。

## 构造器
constructor 是在 new 这个实例的时候自动执行。   
传统的 constructor 的使用方式。
```typescript
class Person {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('brightLian');
console.log(person.name);
```
在 TypeScript 中我们可以简化写为：
```typescript
class Person {
    constructor(public name: string) {}
}

const person = new Person('brightLian');
console.log(person.name);
```

## 关键字super
我们在子类继承父类的时候，子类如果是有构造器，那么必须在子类的构造器中调用 super()方法。
```typescript
class Person {
    constructor(public name: string) {}
}

class Teacher extends Person{
    constructor(public age: number) {
        // 即使父类没有构造器，也必须调用 super()
        super('brightLian');
    }
}

const teacher = new Teacher(28);
console.log(teacher.name);
console.log(teacher.age);
```
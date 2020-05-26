# 2-14 静态属性，Setter和Getter
### Getter的使用
通过上一节我们可以知道，如果一个属性设置为 private 后，我们在外部是不能访问他的。   
但是我们可以通过 getter 来间接的访问私有属性。
```typescript
class Person {
    constructor(private _name: string) {}
    get name() {
        return this._name + ' NB'
    }
}

const person = new Person('brightLian');
console.log(person.name);
```
注：私有属性一般是使用 _ 进行开头  
表面这个方式看没有什么意义，但是我们可以通过 getName 进行加密，然后返回。

### Setter的使用
通过上一节我们可以知道，如果一个属性设置为 private 后，我们在外部是不能改变他的。
但是我们可以通过 setter 来间接的更改私有属性。
```typescript
class Person {
    constructor(private _name: string) {}
    get name() {
        return this._name + ' NB'
    }
    set name(name: string) {
        this._name = name
    }
}

const person = new Person('brightLian');
console.log(person.name);
person.name = 'lml';
console.log(person.name);
```

### 静态属性static
我们不能直接访问类中的内容，但是可以访问类中的静态属性。   
比如我们看下设计模式中的单例模式：
```typescript
// 单例模式
class Demo {
    private static instance: Demo;

    private constructor(public name: string) {}

    public static getInstance(name: string) {
        if (!this.instance) {
            this.instance = new Demo(name)
        }
        return this.instance
    }
}

// const demo = new Demo; 这样是报错的
const demo1 = Demo.getInstance('brightLian');
const demo2 = Demo.getInstance('lml');
console.log(demo1.name);
console.log(demo2.name);
```
我们运行代码后可以看到两次打印出来的都是 brightLian。这就实现了单例模式
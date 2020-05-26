# 2-12 类的定义与继承
### 类的定义
TypeScript 中类的定义和我们平时使用的 ES6 的类的定义是一样的。
```typescript
class Person {
    name: string = 'brightLian';
    getName() {
        return this.name
    }
}

const person1 = new Person();
console.log(person1.getName)
```

### 类的继承
TypeScript 中类的继承和我们平时使用的 ES6 的类的继承也是一样的。
```typescript
class Person2 {
    name: string = 'brightLian';
    getName() {
        return this.name
    }
}

class Teacher extends Person2{
  	getTeacherName() {
  	    return 'lml'
  	}
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
```

### 类的重写
继承者被成为子类，被继承称被成为父类，子类可以重写父类里面的属性。   
我们看下面的例子是应该打印 Person3 里面的内容还是打印 Teacher2 里面的内容呢？
```typescript
class Person3 {
    name: string = 'brightLian';
    getName() {
        return this.name
    }
}

class Teacher3 extends Person3{
  	getName() {
  	    return 'lml'
  	}
}

const teacher3 = new Teacher3();
console.log(teacher3.getName());
```
我们可以尝试打印出来的内容是 lml，这就说明子类里面的内容把父类里面的内容重写了。

### 调用父类
很多时候我们想要调用父类的方法或者其他内容，这个时候我们使用 super 进行调用。    
super 就相当于父类中的 **this**
```typescript
class Person4 {
    name: string = 'brightLian';
    getName() {
        return this.name
    }
}

class Teacher4 extends Person4{
  	getName() {
  	    return super.getName() + '2'
  	}
}

const teacher4 = new Teacher4();
console.log(teacher4.getName());
```
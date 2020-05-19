# 2-15 抽象类
当很多类有相同的属性的时候，我们可以通过抽象类的方式来把它提取出来。   
我们通过 abstract 来定义抽象类。  
同时抽象类只能被继承，不能被实例化。也就是说只能使用 extends 的方式继承，不能使用 new 关键字实例化。
```typescript
abstract class Geom {
    width: number;
    radius: number;
    abstract getArea(): number;
    geType() {
        return 'Geom'
    }
}

class Circle extends Geom{
    getArea(): number {
        return 123;
    }
}

class Square extends Geom{
    getArea(): number {
        return 234;
    }
}
```
我们可以看到抽象类是把通用的类里面的 getArea 这样的东西抽象出来。

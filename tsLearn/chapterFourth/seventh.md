# 4-7 命名空间-namespace（上）
在我们日常开发中经常有这样的情况，我们看如下例子：
```typescript
class Header {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'This is Header';
        document.body.appendChild(elem);
    }
}

class Content {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'This is Content';
        document.body.appendChild(elem);
    }
}

class Footer {
    constructor() {
        const elem = document.createElement('div');
        elem.innerText = 'This is Footer';
        document.body.appendChild(elem);
    }
}

class Page {
    constructor() {
        new Header();
        new Content();
        new Footer();
    }
}
```
在这个例子中我们最后可能真正需要的只有 Page 这个类。但是 ts 经过编译后会有多个全局变量暴露出来。       
   
而我们不需要这些全局变量，所以就会造成全局变量的浪费。 这个时候 namespace 就起到了作用。   
我们看修改后的代码例子：
```typescript
namespace Home {
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }

    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }

    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }

    export class Page {
        constructor() {
            new Header();
            new Content();
            new Footer();
        }
    }
}
```
我们使用 namespace 来声明一个 Home，我们将外部需要用的变量通过 export 暴露出去。   
这个时候 ts 经过编译后会形成一个闭包。我们在外部用的时候可以直接通过 new Home.Page()进行声明。
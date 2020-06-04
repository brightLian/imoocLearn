# 4-8 命名空间-namespace（下）
上节课，我们初步学习了一个例子。    
但是实际开发过程中，我们可能会将 Header、Content、Footer放到一个模块里面，或者放到一个文件。   
这时候该怎么办呢？  
```typescript
// component.ts
namespace Component {
    export class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }

    export class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }

    export class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }
}
```
```typescript
// page.ts
///<reference path='./component.ts' />
namespace Home {
    export class Page {
        constructor() {
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
    }
}
```
我们可以把 Header、Content、Footer 放在一个 ts 文件中。   
在另一个文件中直接引入，这个时候我们会发现不能很清楚的看到依赖关系，这个时候通过 /// 来注明依赖关系。
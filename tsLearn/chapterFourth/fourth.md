# 4-4 Enum 枚举类型
在 JS 中我们经常会遇到有很多逻辑判断的问题：
```javascript
const Status = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
};

function getResult(status) {
    if (status === Status.OFFLINE) {
        return 'offline'
    } else if (status === Status.ONLINE) {
        return 'online'
    } else if (status === Status.DELETED) {
        return 'deleted'
    }
    return 'error'
}

const result = getResult(Status.OFFLINE);
```
我们在 TS 中可以使用枚举类型：
```typescript
enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}

function getResult(status: number) {
    if (status === Status.OFFLINE) {
        return 'offline'
    } else if (status === Status.ONLINE) {
        return 'online'
    } else if (status === Status.DELETED) {
        return 'deleted'
    }
    return 'error'
}

const result = getResult(0);
console.log(result);
```
你可能会好奇，为什么我们 getResult(0) 时返回的是 offline。     
:100: 实际当我们不指定枚举类型的值时，它默认从 0 开始。     
:100: 如果我们指定枚举类型的值，它就会根据初始值为指定值。     
我们看下枚举类型真正是个什么呢？
```typescript
enum Status {
    OFFLINE,
    ONLINE,
    DELETED
}
console.log(Status)
```
返回值如下：
```javascript
return { '0': 'OFFLINE',
  '1': 'ONLINE',
  '2': 'DELETED',
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2 }
```
实际上是枚举类型的数据是双向的。
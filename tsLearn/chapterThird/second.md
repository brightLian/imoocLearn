# 3-2 使用SuperAgent和类型定义文件获取页面内容
### 初始化ts配置文件
使用 tsc --init 命令进行初始化。

### superAgent
superAgent 的作用：使用 superAgent 可以允许我们在 node 里面发送 ajax 请求。   
当使用 ts 文件直接去引入 js 文件的时候会报错，我们需要根据提示去安装对应的翻译文件。
::: danger
TS7016: Could not find a declaration file for module 'superagent'. '/Users/mingliang/learn/imoocLearn/tsLearn/demo/node_modules/superagent/lib/node/index.js' implicitly has an 'any' type.  
Try `npm install @types/superagent` if it exists or add a new declaration (.d.ts) file containing `declare module 'superagent';`
:::

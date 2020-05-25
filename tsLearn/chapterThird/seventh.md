# 3-7 TypeScript的编译运转过程的进一步理解
## tsconfig的作用
通过 tsconfig 文件可以对编译的过程进行处理。    
更改 outDir 属性可以定义编译后的文件输出目录是哪里。

## 配合ts使用的各种工具   
在 package.json 里面使用 tsc -w 命令可以打包所有的文件，并且可以监听文件的变化。当 ts 文件改变后会自动编译。   
在 package.json 里面使用 nodemon 可以配了 tsc -w 监听并实时运行文件。    
但是上面需要开两个命令行窗口，我们可以使用 concurrently 来同时启动多个命令。
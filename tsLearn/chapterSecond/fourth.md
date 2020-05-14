# 2-4 TypeScript基础环境搭建
## 全局安装
npm install typescript -g

## 编译ts文件
使用tsc来编译ts文件，编译后会生成同名的js文件，然后就可以使用node来运行这个js文件了。
  
如果嫌需要编译然后有需要node手动运行麻烦的化，也可以使用ts-node这个工具进行编译并运行。  
如：ts-node demo.ts
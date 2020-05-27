# 4-1 TypeScript中的配置文件（上）
tsconfig文件的作用：typeScript 的编译配置文件。    
   
当你使用 tsc 命令对某个文件进行编译的时候（如：tsc demo.ts），它不会以配置文件中的配置为准。      
只有当你直接使用 tsc 命令整体编译的时候，它才会以配置文件为准。    
   
**那么为什么直接运行 tsc 就可以对文件进行编译呢？**    
当运行 tsc 命令时，它会对根目录里面所有的 ts 文件进行编译。    
    
**当我只想编译某些文件时怎么办？**    
我们可以更改 tsconfig 文件，在里面增加 include 配置指定要编译的内容。     
或者增加 exclude 配置指定不需要编译的内容。   
也可以使用 files 来指定编译的文件。     
     
**编译后如何去掉注释？**  
在 tsconfig 文件中，配置 removeComments 的值为 true 即可。   
    
**当一个值可以是 any 类型，我们是否可以不明确的指定类型？**  
在 tsconfig 文件中，配置 noImplicitAny 的值为 false 即可。  
  
**不强制进行 null 校验，也是就是 null 可以赋值给任意的基础类型？**
在 tsconfig 文件中，配置 strictNullChecks 的值为 false 即可。
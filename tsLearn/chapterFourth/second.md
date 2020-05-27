# 4-2 TypeScript中的配置文件（下）
上节课我们说使用 tsc 去直接编译一个文件时，不会走 tsconfig 的配置。但是我们使用 ts-node 对某个文件进行编译的时候会走 tsconfig 配置。   
    
**如何指定要编译的文件地址？**  
在 tsconfig 文件中，配置 rootDir 的值，给定文件路径。

**如何指定编译后文件输入的地址？**  
在 tsconfig 文件中，配置 outDir 的值，给定文件路径。    
     
**如何使用增量编译？**  
在 tsconfig 文件中，配置 incremental 的值为 true。   
它会生成一个 tsconfig.tsbuildinfo 的文件，来对之前的编译进行记录。    
   
**如何指定编译成的js版本？**  
在 tsconfig 文件中，配置 target 的值，给定要编译的版本。   
   
**如何允许编译 js 文件？**   
在 tsconfig 文件中，配置 allowJs 的值为 true。   
     
**如何对 js 文件进行检查？**   
在 tsconfig 文件中，配置 checkJs 的值为 true。   
   
**生成 sourceMap 文件**  
在 tsconfig 文件中，配置 sourceMap 的值为 true。

**变量或参数定义后未使用**   
变量未被使用：在 tsconfig 文件中，配置 noUnusedLocals 的值为 true。    
参数未被使用：在 tsconfig 文件中，配置 noUnusedParameters 的值为 true。    
   
详细的配置项内容可以参考官网的配置项。

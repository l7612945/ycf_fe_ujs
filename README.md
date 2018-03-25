<<<<<<< HEAD
文件说明
```d

├── Dist                    
├── Example                 //外部项目引用例子
├── Mybuild                 //编译生成的模块库文件
├── Server.Js               //开启node服务
├── Src                     //源文件
├──├── Module               //模块文件
├──├── Sasscore             //sassapi
├──└── Widgets              //组件
├── Webpack.Build.Js        //编译生成模块库
├── Webpack.Common.Js
├── Webpack.Dev.Js          //开发模式
└── Webpack.Prod.Js         //编译生成所有模块和组件
```
###
=======
文件说明
```d

├── Dist                    
├── Example                 //外部项目引用例子
├── Mybuild                 //编译生成的模块库文件
├── Server.Js               //开启node服务
├── Src                     //源文件
├──├── Module               //模块文件
├──├── Sasscore             //sassapi
├──└── Widgets              //组件
├────────├── input
├─────────────├── index.html            //组件预览模版
├─────────────├── views.js              //入口js
├─────────────├── src                   //源文件
├─────────────└── index.js              //用于注册vue插件
├── Webpack.Build.Js        //编译生成模块库
├── Webpack.Common.Js
├── Webpack.Dev.Js          //开发模式
└── Webpack.Prod.Js         //编译生成所有模块和组件
```
###

使用说明
1. 通过npm install 安装node_modules
    建议使用最新版node
    如果遇到‘ DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead’错误， 执行‘npm install extract-text-webpack-plugin@next ’更新插件
2. 开发模式下，执行'npm run server'开启服务
3. 执行'npm run build' 生成外部项目用的js和css。文件生成在mybuild目录
4. 执行'npm run build'前，需要先在example/buildindex.js中填写配置，添加需要编译的module组件
>>>>>>> 2650331817a03cccc0a02a24101fba3ac2c8a151

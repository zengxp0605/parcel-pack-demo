# Parcel Example

使用 [Parcel](https://parceljs.org/) 打包 React/TypeScript/Vue 应用 demo。

```

npm install -D parcel-bundler
# Or
npm install -g parcel-bundler


npm install 

# 开发模式, 热重启
npm start

# 生产
npm run build

```

在浏览器中打开 <http://localhost:1234>

## 打包时命令参数
```
-p, --port <port> 设置服务器端口
--https 在https协议上运行
-o, --open 自动在默认浏览器打开
-d, --out-dir <path> 设置输入路径默认为dist
--public-url <url> 设置服务器运行的路劲. 默认与--out-dir option 设置的相同
--no-hmr 关闭热模块替换
--no-cache 关闭缓存
-V, --version 版本信息
-h, --help 帮助信息

```

## 其他
- Parcel 会自动安装引入的模块(如果用之前未安装)

- 打包输出在`dist`目录


## TODO: 

- 如何与 Laya 框架配合使用?
  - 参考[使用 Parcel 打包工具 进行 Layaair 的游戏开发](https://ask.layabox.com/question/16638)

- 如何打包成一个js 文件?
  - 默认打包成一个文件


# 参考
> [详解Parcel：快速，零配置web应用打包工具](https://segmentfault.com/a/1190000015283979)
> [https://segmentfault.com/a/1190000012993528](https://segmentfault.com/a/1190000012993528)
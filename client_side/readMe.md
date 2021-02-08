# 环境搭建

```bash
# 全局安装typescript tslint
npm install -g typescript tslint
```

## 项目初始化

```bash
# 创建目录TSProjectDemo
mkdir TSProjectDemo/client_side
cd TSProjectDemo/client_side
# 初始化项目
# 生成package.json
npm --init
# 生成tsconfig.json
tsc --init
```

## 安装编译工具

```bash
npm install -D webpack@4.x.x webpack-cli@3.x.x webpack-dev-server
npm install -D clean-webpack-plugin html-webpack-plugin@^4.0.0
# tsx? 解析器
npm install -D ts-loader
# 调用编译命令时，使用cross-env传参
npm install -D cross-env
```

## 项目目录结构

```diff
TSProjectDemo
	|- client_side
		|- src
		|- build
			|- webpack.config.js
		|- package.json
		|- tsconfig.json
```

# interface

```bash
# 生成tslint.json文件
tslint --init
```




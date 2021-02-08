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
# 1 生成package.json
npm --init

# 2 生成tsconfig.json
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

## 语法校验

1、`vscode`开发工具上安装插件`tslint`

2、项目里引入`tslint.json`

```bash
# 生成tslint.json文件,tslint前面全局安装过
tslint --init
```

3、修改`tslint.json`文件

`tslint.json`文件里添加`rules`：

```json
{
      "quotemark": [false], // false: 关闭双引号
      "semicolon": [false]	// false: 关闭末尾分号
}
```


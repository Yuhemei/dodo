# dodo

There is my dodo website!  
后面写的踩坑经验送给年轻的你们

## dodo-flask

`pip install -r requirement.txt`

`python app.py`

## dodo-vue

1.安装nvm

Windows :卸载掉之前的Node

`https://github.com/coreybutler/nvm-windows/releases`

MacOS

`https://github.com/nvm-sh/nvm`

2.use Node

`nvm install 12.18.3`  
`nvm use 12.18.3`  

3.## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## git

`git add .`  
`git commit "提交注释"`  
`git pull`  
`git push`  

## MongoDB

自行安装  
windows管理员权限下启动服务  
`net start MongoDBService`

## 踩坑

1. node/npm下载慢或不成功解决办法

在nvm安装目录下的settings.txt中添加镜像地址如下即可：

`node_mirror: https://npm.taobao.org/mirrors/node/`

`npm_mirror: https://npm.taobao.org/mirrors/npm/`
2. 加注释的地方尽量在密闭代码区域
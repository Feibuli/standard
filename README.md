Fuse - 开发手册
=======

Fuse是一套基于[Yeoman](http://yeoman.io/)、[Angular Material](https://github.com/angular/material)、[Gulp](http://www.gulpjs.com/)等技术实现的中后台集成开发框架，包含了Google Material标准套件以及常见自定义套件，实现了基于Gulp的自动化构建（自带小型Web容器、自动编译、打包压缩、实时预览、非覆盖式发布等功能）。

### 内容介绍
 * 目录结构规范（待调整@李毅）
   * 公共目录
   * 模块目录
   * 指令目录
   * Icon Font目录
 * 文件命名规范（待调整@李毅）
   * Controller
   * Service
   * Directive
   * Template
   * Sass
 * Bower使用介绍（待完善@李毅）
   * 演示示例
 * 添加新Icon Font示例（待完善@李毅）
   * 演示示例
 * UI套件示例以及API参考文档（待补充@李毅）
   * 基本步骤
   * 演示示例
   * 说明
 * 模块开发流程（待完善@鲁周娟）
   * 基本步骤
   * 演示示例
   * 说明
 * 自定义指令开发流程（待完善@钟冰）
   * 基本步骤
   * 演示示例
   * 说明

### 依赖环境
* [node](http://nodejs.org) >= 6.6.0
* [python](http://www.python.org) >= 2.7

### 安装&部署
```bash

# 下载并切换目录
$ git clone git@gitlab.zhcx.com:fe-team/standard.git
$ cd standard

# 安装cnpm并切换仓库至国内淘宝镜像
$ npm install -g cnpm --registry=https://registry.npm.taobao.org https://github.com/cnpm/cnpmjs.org.git

# 全局安装bower
$ cnpm install -g bower

# 全局安装gulp
$ cnpm install -g gulp

# 加载npm环境资源依赖
$ cnpm install

# 加载bower环境资源依赖
$ bower install

# 开发环境
$ gulp serve

# 发布环境
$ gulp serve:dist

```

### 简介

基于Angular5 + Ionic3 建立的模板，提供了基础的providers

providers中native service 都屏蔽了，需要的话自行打开即可


### 版本 

    @ionic/cli-utils  : 1.13.1
    ionic (Ionic CLI) : 3.13.2

global packages:

    cordova (Cordova CLI) : not installed

local packages:

    @ionic/app-scripts : 3.1.4
    Cordova Platforms  : none
    Ionic Framework    : ionic-angular 3.9.2

System:

    Node : v8.9.0
    npm  : 5.5.1
    OS   : Windows 10



### 模板框架介绍


|—resources ：存放app icon 和splash 图片，并用命令行适配不同机型  
|—src ： 项目源码  
&nbsp;&nbsp;&nbsp;&nbsp;|---app : 项目根modules入口处  
&nbsp;&nbsp;&nbsp;&nbsp;|---assets： 项目资源  
&nbsp;&nbsp;&nbsp;&nbsp;|---components : 公用组件  
&nbsp;&nbsp;&nbsp;&nbsp;|---pages : 存放所有的页面代码（typescript html scss）  
&nbsp;&nbsp;&nbsp;&nbsp;|---pipe : 管道代码  
&nbsp;&nbsp;&nbsp;&nbsp;|---providers :  服务类提供商  
&nbsp;&nbsp;&nbsp;&nbsp;|---theme :  项目的主题：需要修改全局样式的话，在此修改  
&nbsp;&nbsp;&nbsp;&nbsp;|---index.html : 入口文件  
|—config.xml : app配置文件  
|—package : 项目配置文件  


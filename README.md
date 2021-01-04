# JD_SignIn - 京东签到脚本 ![](https://img.shields.io/badge/version-v2.3.1-green) ![](https://img.shields.io/badge/author-zzr-blue) ![](https://img.shields.io/badge/update-20201119-informational)

## 脚本简介：

#### 该脚本使用autojs编写。

------

## 功能介绍：

- #### 京东京豆签到（种豆得豆、双签领豆、进店领豆、抽京豆、摇京豆）;
- #### 京东领券签到;
- #### 京东拍拍二手签到; （京东已去除该签到）
- #### 京东金融签到领钢镚;
- #### 京东金融双签领取;
  
------

## 使用说明：（使用前请仔细阅读说明）

1.  #### 京东、京东金融需要更新到最新版本;

2. #### 请在运行脚本前，给脚本开启无障碍权限、允许悬浮窗权限、允许后台弹出界面权限;

3. #### 启动脚本前请结束京东、京东金融，启动脚本后，等待脚本自动操作完成即可，脚本会自动关闭脚本程序和控制台;
   
4. #### 无需root，仅测试了米9有效，理论上其它机型都可以运行;

5. #### 如果是root用户，可以在脚本右上角设置里开启使用root权限自动启动打开无障碍权限;
   
6. #### 如无需使用（种豆得豆、双签领豆、进店领豆、抽京豆、摇京豆）功能，请使用v2.2.5版本;

------

## 特别说明：

- #### 脚本仅供学习，请勿商用，如产生法律纠纷与本人无关；
  
- #### 本脚本免费使用

------

## 主要方法：

#### app.startActivity()

```javascript
//例如,打开京东领券界面
app.startActivity({
	data: "openapp.jdmobile://virtual?params={\"category\":\"jump\",\"des\":\"couponCenter\"}"
})
```

------

## 下载地址：

#### [蓝奏云](https://www.lanzoui.com/b00o0wbtc) 密码:2ojw

## 源码地址：

#### https://github.com/Gitzzr/JD_SignIn

  

# JD_SignIn - 京东签到脚本 ![](https://img.shields.io/badge/version-v2.2.4.11-green) ![](https://img.shields.io/badge/author-zzr-blue) ![](https://img.shields.io/badge/update-20201108-informational)

## 脚本简介：

#### 该脚本使用autojs编写。

------

## 功能介绍：

- #### 京东京豆签到;
- #### 京东领券签到;
- #### 京东拍拍二手签到;
- #### 京东金融签到领钢镚;
- #### 京东金融双签领取;

------

## 使用说明：

1. #### 从未运行过脚本会弹出让你先给脚本开启无障碍，需要允许悬浮窗权限;

2. #### 无需root，仅测试了米9有效，理论上其它机型都可以运行;

3. #### 如果是root用户，可以在脚本右上角设置里开启使用root权限自动启动打开无障碍权限;

4. #### 启动脚本前请结束京东、京东金融，启动脚本后，等待脚本自动操作完成即可，脚本会自动关闭脚本程序和控制台;

5.  #### 请把京东、京东金融更新到最新版本;

------

## 特别说明：

- #### 脚本仅供来学习，请勿商用。本脚本免费;
- #### 仅测试了米9有效，理论上其它机型都可以运行;

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

  

/**
 * @Author zzr
**/
// auto.waitFor();
function 权限申请() {
    if (auto.service == null) {
        toast("请开启脚本的无障碍服务");
        auto.waitFor();
        return
    }
    sleep(200);
    if (!floaty.checkPermission()) {
        toast("请开启悬浮窗和后台弹出界面权限");
        floaty.requestPermission();
        return
    }
}

权限申请();

var height = device.height; //获取设备的高度
var width = device.width;  //获取设备的宽度

//判断是否第一次打开
function firstdialog() {
    if (id("contentPanel").exists()) {
        id("button1").findOne().click();
        console.log("点击允许打开京东或京东金融");
        sleep(1000);
    }
}
//写个固定sleep
function sl() {
    sleep(1000)
}
function splus() {
    sleep(2000)
}
//返回两次
function bk2() {
    sl();
    var i = 0;
    while (i < 2) {
        sleep(500);
        back();
        i++;
    }
}
// 等待页面加载
function jdWaitFor(params) {
    sleep(2000);
    if (!textContains(params).exists()) {
        console.log("找不到控件，使用阻塞模拟加载");
        sleep(5000);
    } else {
        textContains(params).waitFor();
    }
}
//显示控制台
console.show();
// console.log("调整位置...");
console.setPosition(100, device.height - (device.height / 3));
sleep(1000);
// console.log("调整大小...");
console.setSize(device.width / 2, device.height / 4);
sleep(2000);

//执行脚本任务
JdGetBeans();
JdGetCoupon();
PaipaiSignIn();
JdjrSignIn();

//任务结束
console.log("脚本全部运行结束，如脚本未关闭，请手动关闭脚本。");
console.log("提示：3秒后关闭控制台");
sleep(3000);
console.hide();
exit();

function JdGetBeans() {
    //京东签到领豆
    console.log("开始执行: 京东签到领豆");
    app.startActivity({
        data: "openapp.jdmobile://virtual?params=%7B%22category%22%3A%22jump%22%2C%22modulename%22%3A%22JDReactCollectJDBeans%22%2C%22appname%22%3A%22JDReactCollectJDBeans%22%2C%22ishidden%22%3A%22true%22%2C%22des%22%3A%22jdreactcommon%22%2C%22param%22%3A%7B%22source%22%3A%22%22%2C%22shareMark%22%3A%22%22%2C%22transparentenable%22%3Atrue%2C%22page%22%3A%22collectJDBeansHomePage%22%7D%2C%22sourceType%22%3A%222%22%2C%22sourceValue%22%3A%221%22%2C%22M_sourceFrom%22%3A%22ljdshare%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%22122270672.15657867566391942107949.1565786757.1566129699.1566920977.3%22%2C%22usc%22%3A%22androidapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%22122270672%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1566920977829%22%2C%22ref%22%3A%22https%3A%2F%2Fbean.m.jd.com%2Fshare%2Findex.action%3Fad_od%3Dshare%26utm_source%3Dandroidapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%22%2C%22psn%22%3A%2215657867566391942107949%7C3%22%2C%22psq%22%3A1%2C%22unpl%22%3A%22%22%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%2215657867566391942107949%22%2C%22mba_sid%22%3A%221566920977831781596122039158%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22ad_od%3Dshare%26utm_source%3Dandroidapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%22%2C%22event_id%22%3A%22MJingDouHome_ShareSign%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%22122270672%7Candroidapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1566920977829%22%2C%22unpl%22%3A%22%22%2C%22__jda%22%3A%22122270672.15657867566391942107949.1565786757.1566129699.1566920977.3%22%7D%7D"
    })
    splus();
    firstdialog();
    lingdou();
    sleep(1500);
}

function JdGetCoupon() {
    //京东签到领券
    console.log("开始执行: 京东签到领券");
    app.startActivity({
        data: "openapp.jdmobile://virtual?params={\"category\":\"jump\",\"des\":\"couponCenter\"}"
    })
    splus();
    lingquan();
    sleep(1500);
}

function PaipaiSignIn() {
    //拍拍二手签到有礼
    console.log("开始执行: 京东拍拍二手签到");
    app.startActivity({
        data: "openapp.jdmobile://virtual?params={\"category\":\"jump\",\"des\":\"m\",\"url\":\"https://pro.m.jd.com/mall/active/3S28janPLYmtFxypu37AYAGgivfp/index.html\"}"
    })
    splus();
    paipai();
    sleep(1500);
}

function JdjrSignIn() {
    //京东金融签到
    console.log("开始执行: 京东金融签到");
    app.startActivity({
        data: "jdmobile://share?jumpType=7&jumpUrl=1373&channel=default&sourceUrl=1000*https%3A%2F%2Fu.jr.jd.com%2FdownloadApp%2Findex.html%3Fid%3D1708&source=&time=1566923315288"
    })
    sl();
    firstdialog();
    sl();
    console.log("等待页面加载ing");
    text("每日玩一玩").waitFor();
    sl();
    console.log("页面加载完成,开始点击签到");
    jdjr();
    sleep(1500);
}

//京东签到领豆
function lingdou() {
    console.log("等待京东签到领豆页面加载完成");
    jdWaitFor("签到");
    console.log("页面加载成功，开始签到");
    if ((text("新人连签京豆礼包").exists()) || (text("京豆可抵钱！").exists())) {
        sl();
        click(device.height / 1.625);
        sl();
        click("去签到领豆");
        console.log("该功能为测试功能是否成功点击或许要手动确认");
        sl();
        back();
    } else if (text("签到领京豆").exists()) {
        console.log("开始点击-签到领京豆");
        //因为通过点击text无效  所以通过获取text的范围中心点来点击
        var b = text("签到领京豆").findOne().bounds();
        click(b.centerX(), b.centerY());
        sleep(2000);
        back();
        sleep(1500);
        if (text("已连续签到").exists()) {
            console.log("京东_签到领豆完成");
            sl();
        }
        sl();
    } else if (text("已连续签到").exists()) {
        console.log("京东_签到领豆：今日已完成签到");
        sl();
    }
    jdtask();
    sl();
    back();
    sl();
}

//京东签到领券
function lingquan() {
    console.log("等待京东签到领券页面加载完成");
    jdWaitFor("推荐");
    console.log("页面加载成功，开始签到");
    if (!textContains("明天提醒我").exists() && text("立即领红包").exists()) {
        console.log("开始点击 立即领红包");
        while (!click("立即领红包"));
        sleep(500);
        if (text("您还有现金红包未领取").exists()) {
            console.log("您还有现金红包未领取");
            back();
            sl();
        }
        if (text("送您无门槛现金红包").exists()) {
            console.log("领取成功，点击返回");
            back();
            sl();
        }
    } else {
        console.log("京东_签到领券： 今日已完成");
    }
    sleep(500);
    back();
}

//拍拍二手签到有礼
function paipai() {
    var signin = "签到";
    var signinDay = null;
    console.log("等待拍拍二手签到页面加载完成");
    jdWaitFor("签到");
    // textContains("签到").waitFor();
    console.log("拍拍二手签到页面加载完成");

    if (!text(signin).exists() && !desc(signin).exists()) {
        // 匹配规则
        var patt = "\\b[\u4e00-\u9fa5]{4}\\d[\u4e00-\u9fa5]+\\b";
        //正则查找按钮的签到天数
        var signinDay = textMatches(patt).findOne().text();
        // console.log("正则查找按钮的签到天数");
        this.signinDay = signinDay;
    }

    if (text(signin).exists() || desc(signin).exists()) {
        console.log("开始拍拍二手签到");
        sl();
        if (text(signin).exists()) {
            toast("使用text点击");
            text(signin).findOne().click();
        } else if (desc(signin).exists()) {
            toast("使用desc点击");
            desc(signin).findOne().click();
        }
        sl();
        if (text("签到成功").exists()) {
            //关闭签到后弹出的界面
            back();
            sl();
            console.log("拍拍二手签到成功");
        }
    } else if (text(signinDay).exists()) {
        console.log("京东_拍拍二手签到： 今日已完成签到,已" + signinDay);
    } else if (!text(signin).exists() && !text(signinDay).exists()) {
        console.log("出错啦！请尝试重新启动脚本，或可能该控件已经更新，请联系作者qq2282481204进行反馈。");
        sleep(3000);
    }
    sl();
    back();
}

//京东金融签到
function jdjr() {
    if (text("签到领钢镚").exists()) {
        sl();
        text("签到领钢镚").findOne().click();
        sleep(2000);
        identityAuthentication();
    } else if (text("签到领钢镚1").exists()) {
        sl();
        text("签到领钢镚1").findOne().click();
        sleep(2000);
        identityAuthentication();
    } else if (text("签到并瓜分钢镚").exists()) {
        sl();
        text("签到并瓜分钢镚").findOne().click();
        sleep(2000);
        identityAuthentication();
    } else {
        console.log("京东金融_签到领钢镚完毕");
        sleep(2000);
        back();
        sleep(500);
        if (textContains("元免费用7天，确认离开？").exists()) { back(); }
        sleep(500);
        bk2();
        sleep(500);
        if (text("保险").exists()) { bk2(); }
        log("开始京东双签");
        jdsq();
    }
    sl();
    bk2();
}
//判断是否还未实名验证
function identityAuthentication() {
    if (text("立即认证").exists() || text("暂不前往").exists() || text("为了您的账户安全，请先认证").exists() || text("实名认证后即可签到哦~").exists()) {
        text("暂不前往").click();
        sleep(500);
        back();
        bk2();
        // throw new Error("请先手动完成实名认证");
        alert("请先手动完成实名认证");
    } else {
        SignInOver();
    }
}
function SignInOver() {
    console.log("京东金融_签到领钢镚完毕");
    sleep(500);
    text("A8cE5rkcg7isAAAAAElFTkSuQmCC").findOne().click();  //关闭签到后弹出
    sleep(2000);
    back();
    sleep(500);
    if (textContains("元免费用7天，确认离开？").exists()) { back(); }
    sleep(500);
    bk2();
    sleep(500);
    if (text("保险").exists()) { bk2(); }
    log("开始京东双签");
    jdsq();
}

//京东双签领奖励
function jdsq() {
    sl();
    app.startActivity({
        data: "jdmobile://share?jumpType=7&jumpUrl=1374&channel=default&sourceUrl=1000*https%3A%2F%2Fu.jr.jd.com%2FdownloadApp%2Findex.html%3Fid%3D1709&source=&time=1566923694481"
    })
    splus();
    text("活动规则").waitFor();
    console.log("京东双签页面加载成功");
    sl();
    if (text("点击查看礼包").exists()) {
        console.log("京东_签到领豆：今日已完成双签领奖励");
        sleep(1000);
        back();
        sl();
    }
    else {
        text("完成双签领取").waitFor();
        sleep(1000);
        text("完成双签领取").findOne().click();
        console.log("京东_双签领取完成");
        sl();
        back();
    }
    bk2();
    //退出京东金融app
}

//执行5个任务
function jdtask() {
    while (textContains("0/5").exists() || textContains("1/5").exists() || textContains("2/5").exists() || textContains("3/5").exists() || textContains("4/5").exists()) {
        console.log("开始领取更多京豆");
        sleep(1000);
        console.log("开始执行--种豆得豆");
        zhongdoudedou();//执行种豆得豆
        console.log("执行--种豆得豆--完毕");
        sleep(1000);
        console.log("开始执行--双签领豆");
        shuangqianlingdou();//执行双签领豆
        console.log("执行--双签领豆--完毕");
        sleep(1000);
        console.log("开始执行--抽京豆");
        choujingdou();//执行抽京豆
        console.log("执行--抽京豆--完毕");
        sleep(1000);
        console.log("开始执行--摇京豆");
        yaojingdou();//执行摇京豆
        console.log("执行--摇京豆--完毕");
        sleep(1000);
        console.log("开始执行--进店领豆");
        jingdianlingdou();//执行进店领豆
        console.log("执行--进店领豆--完毕");
        sleep(1000);
    }
    if (textContains("成功领取京豆奖励").exists()) {
        console.log("今日已经领取京豆奖励");
    } else if (textContains("领取京豆奖励").exists()) {
        console.log("已完成今日任务");
        var taskover = textContains("领取京豆奖励").findOne().bounds();
        // console.log(taskover.centerX(), taskover.centerY());
        click(taskover.centerX(), taskover.centerY());
        sleep(1000);
        //可能领取失败，再点一下
        click(taskover.centerX(), taskover.centerY());
        sleep(1000);
    }
}
/**
 * 
 * 京东领京豆，5个任务
 */
function zhongdoudedou() {
    console.log("开始执行种豆得豆");
    //点击坐标213 786
    console.log("点击 种豆得豆");
    click(width / 5.070422535211268, height / 2.9770992366412212);
    sleep(3500);
    //判断是否进入种豆得豆界面
    while (!textContains("豆苗成长值").exists()) {
        console.log("可能网络加载太慢了，尝试重新加载");
        backCN(1);
        sleep(1000);
        click(width / 5.070422535211268, height / 2.9770992366412212);
        sleep(5000);
    }
    for (let i = 0; i < 5; i++) {
        click(width / 2, height / 4.9787234042553195);
        sleep(1000);
    }
    console.log("点击更多任务");
    var gdrw = textContains("更多任务").findOne().bounds();
    click(gdrw.centerX(), gdrw.centerY());
    sleep(500);
    AutoPlay();
    sleep(2000);
    lingyingyangye();
    sleep(2000);
    console.log("种豆得豆任务完成");
    backCN(1);
}
function shuangqianlingdou() {
    if (text("双签领豆").exists()) {
        console.log("双签领豆");
        var y2 = textContains("双签领豆").findOne().bounds();
        if (y2.centerX() > width) {
            console.log("控件在屏幕右边，我试下滑动能否点击到控件");
            swipe(width * 4 / 5, y2.centerY(), width * 2 / 5, y2.centerY(), 500);
            sleep(1000);
            //重新定位控件位置
            y2 = textContains("双签领豆").findOne().bounds();
        } else if (y2.centerX() < 0) {
            console.log("控件跑左边去了，我试下滑动能否点击到控件");
            swipe(width * 2 / 5, y2.centerY(), width * 4 / 5, y2.centerY(), 500);
            sleep(1000);
            //重新定位控件位置
            y2 = textContains("双签领豆").findOne().bounds();
        } else if (y2.centerX() > 0 && y2.centerX() < width) {
            console.log("控件在屏幕中");
        } else {
            console.log("找不到控件,请联系作者修复bug");
            return;
        }
        click(y2.centerX(), y2.centerY());
        text("活动规则").waitFor();
        console.log("双签领豆页面加载成功");
        sleep(3000);
        // if (text("今日已签").exists()) {
        //     console.log("今日已签 按钮存在，开始点击");
        // }
        // text("今日已签").findOne().click();
        // sleep(1000);
        console.log("双签领豆任务完成");
        back();
    }
}
function choujingdou() {
    if (text("抽京豆").exists()) {
        console.log("抽京豆");
        DetermineControlPosition("抽京豆");
        sleep(2000);
        if (textContains("今日还可以抽 1 次哦").exists()) {
            console.log("今日还可以抽1次");
            console.log("开始抽奖");
            //点击GO，坐标538，1083
            click(width / 2.007434944237918, height / 2.160664819944598);
            textContains("今日还可以抽 0 次哦").findOne(6000);
            if (textContains("今日还可以抽 0 次哦").exists()) {
                console.log("今日已经没有抽奖次数了");
            }
            backCN(1);
            sleep(1000);
            while (textContains("今日还可以抽 0 次哦").exists()) {
                backCN(1);
                break;
            }
        } else if (textContains("今日还可以抽 0 次哦").exists()) {
            console.log("今日没有抽奖次数了");
            backCN(1);
        }
    }
}
function yaojingdou() {
    if (text("摇京豆").exists()) {
        console.log("摇京豆");
        DetermineControlPosition("摇京豆");
        sleep(1000);
        textContains("浏览页面").findOne(5000);
        yjdTask("浏览页面", "浏览");
        sleep(1000);
        yjdTask("关注店铺", "关注");
        sleep(1000);
        //开始摇京豆
        if (textContains("摇一摇 有惊喜").exists()) {
            console.log("点击--摇一摇 有惊喜");
            textContains("摇一摇 有惊喜").findOne(5000).click();
            console.log("等待”再摇一次“按钮出现");
            textContains("再摇一次").findOne(5000);
            while (textContains("再摇一次").exists()) {
                console.log("点击--再摇一次");
                textContains("再摇一次").findOne(5000).click();
                sleep(3000);
            }
            textContains("收下了").findOne(3000);
            if (textContains("收下了").exists()) {
                console.log("点击--收下了");
                textContains("收下了").findOne(5000).click();
                sleep(500);
            } else if (!textContains("再摇一次").exists() && !textContains("收下了").exists()) {
                backCN(1);
            }
            sleep(500);
            if (textContains("花费 2 京豆，再来一次").exists()) {
                console.log("摇京豆免费次数已用完,想花我豆？不可能！");
                sleep(500);
                backCN(1);
            } else if (!textContains("摇一摇 有惊喜").exists() && !textContains("花费 2 京豆，再来一次").exists()) {
                console.log("摇京豆免费次数已用完");
                backCN(1);
            }
        } else if (textContains("花费 2 京豆，再来一次").exists()) {
            console.log("摇京豆免费次数已用完,想花我豆？不可能！");
            sleep(500);
            backCN(1);
        } else {
            console.log("摇京豆免费次数已用完");
            sleep(500);
            backCN(1);
        }
    }
}
function jingdianlingdou() {
    if (text("进店领豆").exists()) {
        console.log("进店领豆");
        DetermineControlPosition("进店领豆");
        sleep(500);
        textContains("进店有礼").findOne(1500);
        textContains("京豆君推荐").findOne(3000);
        if (textContains("进店+2京豆").exists()) {
            console.log("点击 进店+2京豆");
            var jindian = textContains("进店+2京豆").findOne().bounds();
            click(jindian.centerX(), jindian.centerY());
            sleep(2000);
            backCN(1);
            sleep(1000);
            backCN(1);
        } else if (textContains("即将开始").exists()) {
            console.log("今天太晚来了，没有奖励可领了");
            backCN(1);
        } else {
            backCN(1);
        }
    }
}

// 摇京豆任务动作
function yjdTask(params, two) {
    if (textContains(params).exists()) {
        console.log("点击" + params);
        textContains(params).findOne().click();
        sleep(500);
        while (!textContains("今日奖励已达上限").exists()) {
            console.log("点击 " + two);
            var b = text(two).findOne().bounds();
            click(b.centerX(), b.centerY());
            sleep(1000);
            backCN(1);
            sleep(2000);
        }
        console.log(params + "任务完成");
        sleep(500);
        backCN(1);
    }
}

//种豆得豆任务执行动作
function AutoTask(str) {
    console.log("点击" + str);
    var at = text(str).findOne().bounds();
    //判断是否超出屏幕
    if (at.centerY() > height / 1.0675182481751824) {
        console.log("控件跑屏幕底下了，我试下滑动能否找到控件");
        swipe(at.centerX(), height * 4 / 5, at.centerX(), height * 3 / 5, 500);
        sleep(1000);
    } else if (at.centerY() < height / 2.7209302325581395) {
        console.log("控件跑上边了，我试下滑动能否找到控件");
        swipe(at.centerX(), height * 3 / 5, at.centerX(), height * 4 / 5, 500);
        sleep(1000);
    }
    sleep(300);
    if (at.centerY() > height / 2.7209302325581395 && at.centerY() < height / 1.0675182481751824) {
        console.log("控件在屏幕中");
        //重新定位控件位置
        at = text(str).findOne().bounds();
    } else {
        console.log("找不到控件,请联系作者修复bug");
        return;
    }
    click(at.centerX(), at.centerY());
    console.log("点击成功");
    CheckNetwork();
    sleep(2000);
    if (str == "去逛逛") {
        store();
        sleep(500);
        if (text("生活服务 低价好物").exists()) { backCN(1); }
        sleep(500);
        dongdongnongchang();
        sleep(500);
    } else if (str == "去关注") {
        follow();
    } else if (str == "去签到") {
        text("活动规则").waitFor();
        console.log("双签领豆页面加载成功");
        sleep(3000);
        backCN(1);
    } else if (str == "去购物") {
        sleep(3000);
        backCN(1);
    } else if (str == "去挑选") {
        qutiaoxuan();
        sleep(1000);
    }
    sleep(500);
}
//种豆得豆任务界面点击按钮动作
function AutoPlay() {
    while (text("去逛逛").exists()) {
        AutoTask("去逛逛");
    }
    console.log("任务：去逛逛 --完成--");
    sleep(2000);
    while (text("去关注").exists()) {
        AutoTask("去关注");
    }
    console.log("任务：去关注 --完成--");
    sleep(2000);
    while (text("去签到").exists()) {
        AutoTask("去签到");
    }
    console.log("任务：去签到 --完成--");
    sleep(2000);
    while (text("去购物").exists()) {
        AutoTask("去购物");
    }
    console.log("任务：去购物 --完成--");
    sleep(2000);
    while (text("去挑选").exists()) {
        AutoTask("去挑选");
    }
    console.log("任务：去挑选 --完成--");
    sleep(2000);
    console.log("关闭任务界面");
    //点击坐标539,453
    click(width / 2.0037105751391464, height / 5.1655629139072845);
}
//种豆得豆领取中间营养液
function lingyingyangye() {
    for (let index = 0; index < 10; index++) {
        //第一个
        click(width / 2.727272727272727, height / 2.7336448598130842);
        sleep(200);
        // 第二个
        click(width / 1.9251336898395721, height / 2.947103274559194);
        sleep(200);
        //第三个
        click(width / 1.4917127071823204, height / 2.671232876712329);
        sleep(200);
    }
}
//种豆得豆任务--去逛逛，浏览店铺
function store() {
    // 浏览店铺
    if (text("浏览店铺").exists()) {
        console.log("进行浏览店铺任务");
        CheckNetwork();
        console.log("等待“浏览店铺”页面加载");
        textContains("进").waitFor();
        console.log("页面加载完成");
        if (text("进店任务").exists()) {
            var gz = text("进店并关注").findOne().bounds();
            click(gz.centerX() + 10, gz.centerY() + 20);
            sleep(2000);
            if (id("nd").exists()) {
                idContains("nd").waitFor();
                console.log("nd");
            } else {
                console.log("sleep4000");
                sleep(4000);
            }
            if (textContains("个营养液").exists()) {
                console.log("运气不错，领到营养液啦");
                //点击坐标804,1565
                click(width / 1.3432835820895523, height / 1.4952076677316295);
                sleep(500);
            } else if (textContains("营养液走丢了").exists()) {
                console.log("运气不好，没有领到营养液");
                //点击坐标804,1565
                click(width / 1.3432835820895523, height / 1.4952076677316295);
                sleep(500);
            } else {
                console.log("找不到控件，使用back操作");
                back();
            }
            sleep(1500);
            if (textContains("个营养液").exists()) {
                console.log("找不到控件，使用back操作");
                back();
            }
            if (textContains("营养液走丢了").exists()) {
                console.log("找不到控件，使用back操作");
                back();
            }
            sleep(1500);
        }
        console.log("执行backCN");
        backCN(1);
        sleep(1000);
        if (text("进店任务").exists() && text("进店并关注").exists()) {
            backCN();
        }
    } else {
        backCN(1);
    }
}
//种豆得豆任务--去关注，关注频道任务
function follow() {
    if (text("关注频道任务").exists()) {
        text("进入并关注").waitFor();
        console.log("关注频道任务 加载完成");
        console.log("点击 进入并关注");
        var b = text("进入并关注").findOne().bounds();
        click(b.centerX(), b.centerY());
        sleep(2000);
        backCN(1);
        sleep(1500);
        while (text("进入并关注").exists() && text("关注频道任务").exists()) {
            backCN();
            sleep(1500);
        }
    }
}
//种豆得豆任务--东东农场
function dongdongnongchang() {
    if (text("东东农场").exists()) {
        if (text("去签到").exists()) {
            console.log("点击去签到");
            text("去签到").findOne().click();
            sleep(1000);
        }
        if (textContains("签到领").exists()) {
            console.log("点击签到领");
            textContains("签到领").findOne().click();
            sleep(1000);
            if (textContains("签到成功").exists()) {
                if (textContains("明日再来").exists()) {
                    console.log("点击明日再来");
                    textContains("明日再来").findOne().click();
                    sleep(1000);
                } else {
                    console.log("点击坐标：539, 1569");
                    click(width / 2.0037105751391464, height / 1.491395793499044);
                }
            }
        }
        if (textContains("已连续签到").exists()) {
            var signinDay1 = null;
            // 匹配规则
            var patt = "\\b[\u4e00-\u9fa5]{5}\\d[\u4e00-\u9fa5]\\b";
            //正则查找按钮的签到天数
            var signinDay2 = textMatches(patt).findOne().text();
            // console.log("正则查找按钮的签到天数");
            signinDay1 = signinDay2;
            console.log(signinDay1);
        }
        backCN();
        sleep(1000);
    }
    if (text("东东农场").exists()) {
        backCN();
        sleep(1000);
    }
}
//种豆得豆任务--去挑选
function qutiaoxuan() {
    if (text("/10").exists()) {
        qutiaoxuanAction();
        backCN();
    }
}
//种豆得豆任务--去挑选动作
function qutiaoxuanAction() {
    for (let i = 0; i < 3; i++) {
        console.log("点击 选ta并关注");
        // console.log("点击坐标：" + width / 4.595744680851064, height / 1.5832205683355887);
        click(width / 4.595744680851064, height / 1.5832205683355887);
        sleep(2000);
        backCN(1);
        sleep(1000);
        console.log("左滑动");
        swipe(width * 4 / 5, height / 2, width * 2 / 5, height / 2, 300);
        sleep(1000);
    }
}

//5个任务，判断控件是否在屏幕内
function DetermineControlPosition(string) {
    var b = textContains(string).findOne().bounds();
    if (b.centerX() > width) {
        console.log("控件在屏幕右边，我试下滑动能否点击到控件");
        swipe(width * 4 / 5, b.centerY(), width * 2 / 5, b.centerY(), 500);
        sleep(1000);
        //重新定位控件位置
        b = textContains(string).findOne().bounds();
    } else if (b.centerX() < 0) {
        console.log("控件跑左边去了，我试下滑动能否点击到控件");
        swipe(width * 2 / 5, b.centerY(), width * 4 / 5, b.centerY(), 500);
        sleep(1000);
        //重新定位控件位置
        b = textContains(string).findOne().bounds();
    } else if (b.centerX() > 0 && b.centerX() < width) {
        console.log("控件在屏幕中");
    } else {
        console.log("找不到控件,请联系作者修复bug");
        return;
    }
    console.log("点击" + string);
    click(b.centerX(), b.centerY());
}
//返回时网络请求失败
function backCN(params) {
    switch (params) {
        case 1:
            back();
            CheckNetwork();
            break;
        case 2:
            back();
            CheckNetwork();
            back();
            CheckNetwork();
            break;
        default:
            back();
            CheckNetwork();
            break;
    }
}
// CheckNetwork();
function CheckNetwork() {
    while (text("网络请求失败").exists()) {
        console.log("网络请求失败,尝试重新加载");
        var b = text("重新加载").findOne().bounds();
        click(b.centerX(), b.centerY());
        sleep(1500);
    }
}

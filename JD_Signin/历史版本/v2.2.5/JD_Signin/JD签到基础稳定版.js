/**
 * @Author zzr
**/
auto.waitFor()

//判断是否第一次打开
function firstdialog() {
    if (id("contentPanel").exists()) {
        id("button1").findOne().click();
        console.log("点击允许打开京东或京东金融");
        sleep(1000);
    }
}
//脚本初始化
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
    while (i<2) {
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
/**
 * @Author zzr
**/

var url = "http://119.23.212.99/JD签到test.js";
// var url = "http://119.23.212.99/JD签到test_speed.js";
engines.execScript("JD签到", http.get(url).body.string());

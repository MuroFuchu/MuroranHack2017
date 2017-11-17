///////////////////////////////////////////
// グローバルオブジェクト
app = angular.module( 'myApp', ['onsen']);
CMN = {};
///////////////////////////////////////////
//パス
CMN.Path = new Object();
CMN.Path.Controllers = "controllers/";
CMN.Path.Views = "views/";
CMN.Path.Datas = "app_data/";
CMN.Path.Img = new Object();
CMN.Path.Img.Slope = "img/slope/";
CMN.Path.Img.Spot = "img/spot/";

///////////////////////////////////////////
//アイコン
CMN.Icon = new Object();
CMN.Icon.Scenery = "keshiki";
CMN.Icon.Season = new Object();
CMN.Icon.Season.Spring = "haru";
CMN.Icon.Season.Summer = "matsu";
CMN.Icon.Season.Fall = "aki";
CMN.Icon.Season.Winter = "fuyu";
CMN.Icon.History = "rekishi";
CMN.Icon.Geography = "chikei";
CMN.Icon.Rare = "mezurashii";

///////////////////////////////////////////
/// 画面遷移
CMN.Navi = {};
CMN.Navi.BackMainMenu = function() {
    console.log("メインメニューに戻る");
    myNavi.resetToPage("{0}MainMenu.html".format(CMN.Path.Views));
};

///////////////////////////////////////////
/// Format
if (String.prototype.format == undefined) {
    String.prototype.format = function (arg) {
        // 置換ファンク
        var rep_fn = undefined;

        // オブジェクトの場合
        if (typeof arg == "object") {
            rep_fn = function (m, k) { return arg[k]; };
        }
        // 複数引数だった場合
        else {
            var args = arguments;
            rep_fn = function (m, k) { return args[parseInt(k)]; };
        }

        return this.replace(/\{(\w+)\}/g, rep_fn);
    };
}

///////////////////////////////////////////
/// Contains
if (String.prototype.contains == undefined) {
    String.prototype.contains = function (arg) {

        return this.indexOf(arg) != -1;
    };
}

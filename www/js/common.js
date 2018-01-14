///////////////////////////////////////////
// グローバルオブジェクト
app = angular.module( 'myApp', ['onsen']);
CMN = {};

///////////////////////////////////////////
//フラグ
CMN.Flg = new Object();
CMN.Flg.On = "1";
CMN.Flg.Off = "0";

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
CMN.Icon.Pan = "pan";
CMN.Icon.PanGray = "pan_gray";
///////////////////////////////////////////
// フラグ
CMN.Icon.Flg = new Object();
CMN.Icon.Flg.Base = "9";
CMN.Icon.Flg.Selected = "1";
CMN.Icon.Flg.None = "0";

CMN.Icon.Get = function(slope){
    var icons = [];
    
    // 景色
    if(slope.SceneryFlg != "0"){
        icons.push(CMN.Icon.Scenery);
    }
    // 季節
    if(slope.SceneryFlg != "0"){
        switch (slope.SceneryFlg){
            case "1":
                icons.push(CMN.Icon.Season.Spring);
                break;
            case "2":
                icons.push(CMN.Icon.Season.Summer);
                break;
            case "3":
                icons.push(CMN.Icon.Season.Fall);
                break;
            case "4":
                icons.push(CMN.Icon.Season.Winter);
                break;
        }
    }
    // 歴史
    if(slope.SceneryFlg != "0"){
        icons.push(CMN.Icon.History);
    }
    // 地形
    if(slope.SceneryFlg != "0"){
        icons.push(CMN.Icon.Geography);
    }
    // レア
    if(slope.SceneryFlg != "0"){
        icons.push(CMN.Icon.Rare);
    }
    
    return icons;
};

CMN.Icon.GetPan = function(panNum){
    //var panNum = Number($scope.slope.Pan);
    var pans = [];
    
    for(var i = 1 ; i <= 5 ; i++){
        if(i <= panNum){
            pans.push(CMN.Icon.Pan);
        } else {
            pans.push(CMN.Icon.PanGray);
        }
    }
    return pans;
};

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

//////////////////////////////////////////
/// Date Format
Date.prototype.toLocaleString = function()
{
    return [
        this.getFullYear(),
        this.getMonth() + 1,
        this.getDate()
        ].join( '-' ) + ' '
        + this.toLocaleTimeString();
}


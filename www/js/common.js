///////////////////////////////////////////
// グローバルオブジェクト
app = angular.module( 'myApp', ['onsen']);

CMN = {};
///////////////////////////////////////////
//パス
CMN.Path = new Object();
CMN.Path.Controllers = "controllers/";
CMN.Path.Views = "views/";

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

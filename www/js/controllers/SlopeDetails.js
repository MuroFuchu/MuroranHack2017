app.controller('SlopeDetailsCtrl', function($scope){
    $scope.slope = null;
    $scope.dialogs = {};
    
    $scope.init = function(){
        var options = $scope.myNavi.topPage.data;
        if(options !== undefined){
            $scope.slope = options;
        } else {
            console.log("パラメータ取得失敗"); 
        }
        
        console.log("SlopeDetailsCtrl初期化");
        console.log("openFB初期化");
        openFB.init
            ({
                appId: '767624673430987',//Appキー
                tokenStore: window.localStorage,//トークン保存場所指定
                accessToken: window.localStorage.accessToken//アクセストークンの保存
            });
    };
    
    $scope.GetCaption = function(){
        return "{0}：{1}".format($scope.slope.SlopeId, $scope.slope.SlopeName);
    };
    
    $scope.getIcons = CMN.Icon.Get;
    
    $scope.getPanIcon = CMN.Icon.GetPan;
    
    $scope.show = function(dlg) {
        if (!$scope.dialogs[dlg]) {
            ons.createDialog(dlg).then(function(dialog) {
                $scope.dialogs[dlg] = dialog;
                dialog.show();
            });
        } else {
            $scope.dialogs[dlg].show();
        }
    };
    
    $scope.fb_init = function(){
        openFB.api({path: '/me', 
            success: function (me) {
                console.log(me.name + "さんがログインしました。");
            },
            error: function (err) {
                console.log("ログインできませんでした。");
            }
        }); 
    };

    // Twitterに投稿する
    $scope.twitterPop = function(){
        console.log("Twitterに投稿するボタン押下");
        var div_tweet = document.getElementById('div-tweet');
        var base_url = 'https://twitter.com/intent/tweet';
        var text = '百名坂をクリアしました。';//ツイート内容
        var hashtags = '室蘭百名坂';//ハッシュタグ
	    var tweetid = 0;

        var tweetLink = base_url +
            '?text=' + encodeURIComponent(text) +
	        '&hashtags=' + hashtags +
	        '&target=_blank';
        window.open(encodeURI(decodeURI(tweetLink)), '結果をツイートする');
        console.log("Twitterに投稿するボタン押下_終了");
    };

    // Facebookに投稿する
    $scope.facebookPop = function(){
        openFB.login(function (data) {
        }, {scope: 'publish_actions'});
        openFB.api({
            method: 'POST',
            path: '/me/feed',
            success: function (response) {
                message: 'ABCDE';
            },
            error: function (err) {
                console.log("投稿できませんでした。");
                console.error(err);
            }
        });
    };
    
    // 初期化
    $scope.init();
    $scope.fb_init();
});
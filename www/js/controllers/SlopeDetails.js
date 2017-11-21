app.controller('SlopeDetailsCtrl', function($scope, GetJsonService){
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
        console.log("Twitterに投稿するボタン押下_開始");
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
        console.log('Facebookに投稿するボタン押下');
        openFB.login(function (data) {
            openFB.api({
                method: 'POST',
                path: '/me/feed',
                params: {
                    // 投稿する内容
                    message: '百名坂をクリアしました。',
                },
                success: function() {
                    console.log('Facebookへの投稿が完了しました。');
                    alert('Facebookへの投稿が完了しました。');
                },
                error: function(err){
                    console.log('投稿できませんでした。');
                }});
        }, {scope: 'publish_actions'});
    };
    
    var container = document.getElementById( "tweet-search-timeline" ) ;


    // Twitterツイート検索
    twttr.widgets.createTimeline (
        "932767191954362368" ,	// 第1引数: ウィジェットID
    	container ,	// 第2引数: コンテナの要素
    	{	// 第3引数: パラメータ
//    		width: 300 ,	// 横幅
    		tweetLimit: 5 ,	// ツイートの数
    	}
    ) ;

    
    // 初期化
    $scope.init();
});
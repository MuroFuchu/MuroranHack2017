// 坂詳細コントローラ
app.controller('SlopeDetailsCtrl', function($scope, GetJsonService){
    $scope.init = function(){
        console.log("SlopeDetailsCtrl初期化");

        // OpenFB
        openFB.init({appId: '767624673430987', tokenStore: window.localStorage, accessToken: window.localStorage.accessToken});

        $scope.fb_init = function () {
            openFB.api({path: '/me', 
                success: function (me) { },
                error:  function (err) { }
            }); 
        };
        $scope.fb_init();

        // 公式FB
//        window.fbAsyncInit = function() {
//            console.log("3");
//            FB.init({
//              appId      : '767624673430987',
//              cookie     : true,  // enable cookies to allow the server to access 
//                          // the session
//              xfbml      : true,  // parse social plugins on this page
//              version    : 'v2.11' // use graph api version 2.8
//            });
//        // Now that we've initialized the JavaScript SDK, we call 
//        // FB.getLoginStatus().  This function gets the state of the
//        // person visiting this page and can return one of three states to
//        // the callback you provide.  They can be:
//        //
//        // 1. Logged into your app ('connected')
//        // 2. Logged into Facebook, but not your app ('not_authorized')
//        // 3. Not logged into Facebook and can't tell if they are logged into
//        //    your app or not.
//        //
//        // These three cases are handled in the callback function.    
//            FB.getLoginStatus(function(response) {
//              statusChangeCallback(response);
//            });
//        };
//        
//        // Facebook SDKのロード
//        $(function(d, s, id) {
//          console.log("4");
//          var js, fjs = d.getElementsByTagName(s)[0];
//          if (d.getElementById(id)) return;
//          js = d.createElement(s); js.id = id;
//          js.src = "//connect.facebook.net/ja_JP/sdk.js";
//          fjs.parentNode.insertBefore(js, fjs);
//        }(document, 'script', 'facebook-jssdk'));
    };

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
    
    // OpenFB
    $scope.facebookPop = function () {
        console.log("Facebookに投稿するボタン押下");
        
        // Facebookログイン
        $scope.fbLogin = function() {
            console.log("FBログイン開始");
            openFB.login(function (data) {
//                $scope.fb_init();
            }, {scope: 'email,public_profile'});
            console.log("FBログイン終了");
        };
         
        // Facebookログアウト
        $scope.fbLogout = function() {
            console.log("FBログアウト開始");
            openFB.logout(function () {
//                $scope.fb_init();
            });
            console.log("FBログアウト終了");
        };
        
        console.log("Facebookに投稿するボタン押下_終了");
    };
//    $scope.facebookPop = function(){        
//        // This is called with the results from from FB.getLoginStatus().
//        $scope.statusChangeCallback = function(response) {
//        console.log("1");
//            console.log('statusChangeCallback');
//            console.log(response);
//            // The response object is returned with a status field that lets the
//            // app know the current login status of the person.
//            // Full docs on the response object can be found in the documentation
//            // for FB.getLoginStatus().
//            if (response.status === 'connected') {
//              // Logged into your app and Facebook.
//              testAPI();
//            } else {
//                console.log("fal");
//              // The person is not logged into your app or we are unable to tell.
//              document.getElementById('status').innerHTML = 'Please log ' +
//                'into this app.';
//            }
//        };
//        
//        // This function is called when someone finishes with the Login
//        // Button.  See the onlogin handler attached to it in the sample
//        // code below.
//        $scope.checkLoginState = function() {
//            console.log("Facebookに投稿するボタン押下");
//            console.log("2");
//            
//            FB.getLoginStatus(function(response) {
//              statusChangeCallback(response);
//            });
//            console.log("Facebookに投稿するボタン押下_終了");
//        };
//            
//        // Here we run a very simple test of the Graph API after login is
//        // successful.  See statusChangeCallback() for when this call is made.
//        $scope.testAPI = function() {
//          console.log("5");
//          console.log('Welcome!  Fetching your information.... ');
//          FB.api('/me', function(response) {
//            console.log('Successful login for: ' + response.name);
//            document.getElementById('status').innerHTML =
//              'Thanks for logging in, ' + response.name + '!';
//          });
//        };
//        $scope.checkLoginState();
//    };
    
    $scope.init();
    $scope.facebookPop();
});
app.controller('TouristSpotDetailsCtrl', function($scope, GoogleMapService){
    $scope.spot = {};   //  観光地JSON
    $scope.desc = "";   //  説明
    $scope.map = null;
    
    $scope.init = function(){
        //パラメータ取得
        var options = $scope.myNavi.topPage.data;
        if(options !== undefined){
            $scope.spot = options;
            
            for(var i in $scope.spot.descs){
                $scope.desc +=  $scope.spot.descs[i].body;
            } 
        } else {
            console.log("パラメータ取得失敗"); 
        }

        var mapOptions = {           
              center: new google.maps.LatLng(42.329000, 140.98953),             
              zoom: 12,
              //地図のタイプを指定
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };       

        //Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            $scope.spot.name.name1.written,
            GoogleMapService.getLatLng(
                $scope.spot.place.coordinates.latitude,
                $scope.spot.place.coordinates.longitude
            )
        );
    };
    
    $scope.getShortDesc = function(){
        var ret = $scope.desc;
        if($scope.desc.length >= 50) {
            ret = $scope.desc.substring(0, 50) + "...";
        }
        
        return ret;
    }
    
    $scope.clickReadMoreDesc = function(){
        ons.notification.alert({
            message: $scope.desc,
            // もしくはmessageHTML: '<div>HTML形式のメッセージ</div>',
            title: null,
            buttonLabel: '閉じる',
            animation: 'default', // もしくは'none'
            // modifier: 'optional-modifier'
            callback: function() {
            }
        });        
    }
    
    $scope.init();
});
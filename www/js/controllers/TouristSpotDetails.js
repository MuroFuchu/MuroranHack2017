app.controller('TouristSpotDetailsCtrl', function($scope, GoogleMapService, DbAccessService){
    $scope.spot = {};   //  観光地JSON
    $scope.desc = "";   //  説明
    $scope.map = null;
    $scope.slopes = null;
    
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

        //Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            $scope.spot.name.name1.written,
            GoogleMapService.getLatLng(
                $scope.spot.place.coordinates.latitude,
                $scope.spot.place.coordinates.longitude
            )
        );
        
        // 坂マスタ関連処理
        var slopeParams = {
            latitude : Number($scope.spot.place.coordinates.latitude) ,
            longitude : Number($scope.spot.place.coordinates.longitude)
        };
        
        DbAccessService.GetSlope(slopeParams).then(function(rows) {
            $scope.slopes = rows;
        });
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
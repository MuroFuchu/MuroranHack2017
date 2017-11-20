app.controller('RouteByThemeCtrl', function($scope,GoogleMapService, DbAccessService){
    $scope.Theme = null;
    $scope.slopes = null;
    $scope.map = null;
    
    $scope.init = function(){
        $scope.Theme = $scope.myNavi.topPage.data;
        
        //Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            null,
            GoogleMapService.getLatLng(
                "42.3223",
                "140.958258"
            )
        );
        
        // テーマ別の坂を取得する。
        DbAccessService.GetSlopeByTheme($scope.Theme.ThemeId + "Flg").then(function(rows) {
            $scope.$apply(function(){$scope.slopes = rows});
            
            for(var i in $scope.slopes){
                var idx = Number(i)+1;
                var slope = $scope.slopes[i];
                //console.log("マーカー設置：" + slope.SlopeName);
                GoogleMapService.markToMap(
                    slope.SlopeName,
                    String(idx),
                    GoogleMapService.getLatLng(
                        slope.Latitude,
                        slope.Longitude
                    ),
                    $scope.map
                );
            }
        });
    };
    
    $scope.init();
});
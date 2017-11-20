app.controller('SlopeByFatigueCtrl', function($scope, GoogleMapService, DbAccessService){
    $scope.Pan = null;
    $scope.map = null;
    $scope.slopes = null;
    
    $scope.init = function(){
        $scope.Pan = $scope.myNavi.topPage.data;
        
        //Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            null,
            GoogleMapService.getLatLng(
                "42.3223",
                "140.958258"
            )
        );
        
        // Pan別の坂を取得する。
        DbAccessService.GetSlopeByPan(String($scope.Pan)).then(function(rows) {
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
    
    $scope.linkClick = function(slope){
        var link = "SlopeDetails";
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:slope}
        );
    };
     
    $scope.getIcons = CMN.Icon.Get;
    
    $scope.getPanIcon = CMN.Icon.GetPan;
    
    $scope.init();
});
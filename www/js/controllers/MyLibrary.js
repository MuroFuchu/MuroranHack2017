app.controller('MyLibraryCtrl', function($scope, GoogleMapService, DbAccessService){
    $scope.Pan = null;
    $scope.map = null;
    $scope.slopes = null;
    $scope.completeCount = null;
    
    //$scope.init = function(){
    document.addEventListener("init", function(event) {
        /*
        $scope.$on('back', function(event) {
            console.log("mylibrary");
        });*/

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
        
        // 全ての坂を取得する。
        DbAccessService.GetAllSlope().then(function(rows) {
            $scope.$apply(function(){$scope.slopes = rows});        
            $scope.$apply(function(){$scope.completeCount = $scope.slopes.filter(function(x){return x.CompleteFlag == 1 }).length;});  
        
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
                    $scope.map,
                    slope.CompleteFlag
                );
            }
        });        
    });
    //};
    
    $scope.linkClick = function(slope){
        var link = "SlopeDetails";
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:slope}
        );
    };
     
    $scope.getIcons = CMN.Icon.Get;
    
    $scope.getPanIcon = CMN.Icon.GetPan;
    
    //$scope.init();
});
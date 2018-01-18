app.controller('SlopeByFatigueCtrl', function($scope, GoogleMapService, DbAccessService){
    $scope.Pan = null;
    $scope.map = null;
    $scope.slopes = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            $scope.Pan = $scope.myNavi.topPage.data.pan;
        
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
                
                $scope.createMarkerInfo();
                
                $scope.setMarker();
            });
        }
    };
    
    $scope.createMarkerInfo = function(){
        $scope.markers = [];
        for(var i in $scope.slopes){
            var idx = Number(i)+1;
            var slope = $scope.slopes[i];
            
            var item = GoogleMapService.getMarker(
                slope.SlopeName,
                String(idx),
                GoogleMapService.getLatLng(
                    slope.Latitude,
                    slope.Longitude
                ),
                $scope.map,
                ( idx -1 === $scope.selectIdx ) ? CMN.Icon.Flg.Selected : CMN.Icon.Flg.None,
                changedActeveIndex(idx)
            );
            
            $scope.markers.push(item);
        }
    };
    
    $scope.setMarker = function(){
        GoogleMapService.marksToMap($scope.markers, $scope.map);
    };
    
    changedActeveIndex = function(idx){
        //slopeList.setActiveIndex(idx);
    };
    
    $scope.selectChanged = function(idx){
        $scope.selectIdx = idx;
        
        $scope.createMarkerInfo();
        
        $scope.setMarker();
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
    
    //$scope.init();
});
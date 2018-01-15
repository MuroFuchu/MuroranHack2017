app.controller('RouteByThemeCtrl', function($scope,GoogleMapService, DbAccessService){
    $scope.theme = null;
    $scope.map = null;
    $scope.slopes = null;
    $scope.markers = null;
    $scope.selectIdx = 0;

    document.addEventListener("init", function(event) {
        $scope.theme = $scope.myNavi.topPage.data;
        
        //  Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            "",
            GoogleMapService.getLatLng(
                "42.3223",
                "140.958258"
            )
        );
        
        DbAccessService.GetSlopeByTheme($scope.theme.ThemeId + "Flg", $scope.theme.filvalue).then(function(rows) {
            $scope.$apply(function(){$scope.slopes = rows;});
            
            $scope.createMarkerInfo();
            
            $scope.setMarker();
        });
        
    });
        /*
    $scope.init = function(){        //Googleマップ設定
        $scope.map = GoogleMapService.getMap(
            document.getElementById("map_canvas") , 
            null,
            GoogleMapService.getLatLng(
                "42.3223",
                "140.958258"
            )
        );
        
        // テーマ別の坂を取得する。
        DbAccessService.GetSlopeByTheme($scope.theme.ThemeId + "Flg", $scope.theme.filvalue).then(function(rows) {
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
                    $scope.map,
                    slope.CompleteFlag
                );
            }
        });
        
    };*/
    
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

/*
     <section style="width:100%;height:300px;overflow:auto;">
        <ons-list>
            <div ng-repeat="(i,slope) in slopes">
                <ons-list-item modifier="chevron" ng-click="linkClick(slope)">
                    <!--<img src="img/icon/mark1.png" height="48px" width="48px" style="padding-right:10px;" />-->
                    <span style="width:210px;">{{i+1}}:{{slope.SlopeName}}</span>  
                    <span style="width:120px;">                    
                      <span ng-repeat="pan in getPanIcon(slope.Pan) track by $index">
                        <img height="20px" width="20px" src="img/icon/{{pan}}.png" />
                      </span>   
                    </span>    
                </ons-list-item>  
            </div>
        </ons-list>       
     </section>
*/


app.controller('TouristSpotDetailsCtrl', function($scope, GoogleMapService, DbAccessService){
    $scope.spot = {};   //  観光地JSON
    $scope.desc = "";   //  説明
    $scope.map = null;
    $scope.slopes = null;
    $scope.markers = null;
    $scope.selectIdx = 0;
    
    this.mainInit = function(e) {
        if (e.target === e.currentTarget) {
            //パラメータ取得
            var options = $scope.myNavi.topPage.data;
            if(options !== undefined){
                $scope.spot = options;
                
                $scope.desc = "";
                for(var i in $scope.spot.descs){
                    $scope.desc +=  $scope.spot.descs[i].body;
                } 
            } else {
                console.log("パラメータ取得失敗"); 
            }
        }
    };
    
    this.mapInit = function(e) {
        var page = e.target;  // initイベントが発生したページ
        if (e.target === e.currentTarget) {
        //if(page.id === "map-page") {
            //  Googleマップ設定
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
            //DbAccessService.GetSlope(slopeParams).then(function(rows) {
            DbAccessService.GetSlopeByLL(slopeParams.latitude, slopeParams.longitude).then(function(rows) {
                $scope.$apply(function(){$scope.slopes = rows;});
                
                $scope.createMarkerInfo();
                
                $scope.setMarker();
            });
        }
    };
    
    $scope.getIcons = CMN.Icon.Get;
    
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
    
    $scope.getShortDesc = function(){
        var ret = $scope.desc;
        if($scope.desc.length >= 50) {
            ret = $scope.desc.substring(0, 50) + "...";
        }
        
        return ret;
    };
    
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
});
/*

            <!-- リスト
            <ons-list>
            <!-- style="display:table;width:100%" style="display:table-cell" -->
                <ons-list-item ng-repeat="(i,slope) in slopes" tappable modifier="chevron" 
                    ng-click="linkClick(slope)" lock-on-drag="true" >
                    <!--<img src="img/icon/mark1.png" height="48px" width="48px" style="padding-right:10px;" />-->
                    <span style="width:210px;">{{i+1}}:{{slope.SlopeName}}</span>  
                    <span ng-if="getIcons(slope)" style="width:120px;">
                        <span ng-repeat="icon in getIcons(slope)">
                            <img height="28px" width="28px" src="img/icon/{{icon}}.png" />
                        </span>   
                    </span>    
                </ons-list-item>  
            </ons-list>
            -->
            */
            
            
            /*
            <ons-carousel centered swipeable auto-scroll auto-scroll-ratio="0.2">
                <ons-carousel-item ng-repeat="(i,slope) in slopes" ng-click="linkClick(slope)">
                    <div>
                        <span>{{i+1}}:{{slope.SlopeName}}</span>
                        <span style="width:120px;">
                            <!--<span ng-repeat="icon in getIcons(slope)">
                                <img height="28px" width="28px" src="img/icon/{{icon}}.png" />
                            </span>-->   
                        </span>
                    </div>
                </ons-carousel-item>
            </ons-carousel>
            */
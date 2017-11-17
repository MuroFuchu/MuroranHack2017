app.controller('TouristSpotListCtrl', function($scope, GetJsonService){
    $scope.TouristSpotList = null;
    
    $scope.init = function(){
        console.log("TouristSpotListCtrl初期化");
        GetJsonService.getData("TourSpots").then(
            function(res) {
                $scope.TouristSpotList = res.data.tourspots;
                for(var i in $scope.TouristSpotList) {
                    var spot = $scope.TouristSpotList[i];
                    console.log("ID:{0}/{1}/{2}:{3}".format(
                        spot.mng.refbase , 
                        spot.name.name1.written,
                        spot.place.coordinates.latitude,
                        spot.place.coordinates.longitude
                        )
                    );
                }
            }
        );        
    };
    
    $scope.linkClick = function(spot){
        var link = "TouristSpotDetails";
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , link));
        console.log("詳細：{0}".format(spot.name.name1.written));        
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:spot}
        );
    };    
    $scope.init();
});
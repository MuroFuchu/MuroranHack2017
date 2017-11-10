app.controller('TouristSpotListCtrl', function($scope, GetJsonService){
    $scope.TouristSpotList = null;
    
    $scope.init = function(){
        console.log("TouristSpotListCtrl初期化");
        GetJsonService.getData("TourSpots").then(
            function(res) {
                $scope.TouristSpotList = res.data.tourspots;
            }
        );
    };
    
    $scope.linkClick = function(){
        var link = "TouristSpotDetails";
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , link));
        //$scope.ons.navigator.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
        myNavi.pushPage("{0}{1}.html".format(CMN.Path.Views , link));
    };    
    $scope.init();
});
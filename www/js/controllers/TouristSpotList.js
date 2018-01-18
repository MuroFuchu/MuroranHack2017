app.controller('TouristSpotListCtrl', function($scope,$http,$q,GetJsonService){
    $scope.TouristSpotList = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            console.log("TouristSpotListCtrl初期化");
            GetJsonService.getData("TourSpots").then(
    
                function(res) {
                    $scope.TouristSpotList = res.data.tourspots;
                    for(var i in $scope.TouristSpotList) {
                        var spot = $scope.TouristSpotList[i];
                        /*
                        console.log("ID:{0}/{1}/{2}:{3}".format(
                            spot.mng.refbase , 
                            spot.name.name1.written,
                            spot.place.coordinates.latitude,
                            spot.place.coordinates.longitude
                            )
                        );
                        */
                    }   
    
                    /* 画像が存在しない場合は代替画像を設定する  */
                    var deferred = $q.defer();
                    var promise = deferred.promise;
    
                    res.data.tourspots.forEach(function (spot,i,obj){ 
                      promise = promise.finally(function () {
                              var url = "img/spot/{0}.jpg".format(spot.mng.refbase);
                              return $http.get(url)
                                          .success(function(){
                                            obj[i].mng.refbase = obj[i].mng.refbase + ".jpg";
                                          })
                                          .error(function(){
                                            obj[i].mng.refbase = "nophoto.png";
                                          });
                              });
                   });
                   promise = promise.finally(function () {
                          $scope.TouristSpotList = res.data.tourspots; 
                   });           
                   deferred.resolve();
                }
            );
        }
    };
    
    $scope.linkClick = function(spot){
        var link = "TouristSpotDetails";
        //console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , link));
        //console.log("詳細：{0}".format(spot.name.name1.written));        
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:spot}
        );
    };    
});
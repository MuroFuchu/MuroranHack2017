app.controller('TouristSpotDetailsCtrl', function($scope,GetJsonService){
    $scope.map = null;
    
    $scope.init = function(){
        console.log("TouristSpotDetailsCtrl初期化");
        
        //Google mapの設定
        var mapOptions = {           
              center: new google.maps.LatLng(34.7019399,135.51002519999997),             
              zoom: 15,
              //地図のタイプを指定
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };       
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);            
            
         
    };
    $scope.init();
});
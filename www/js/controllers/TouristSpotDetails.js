app.controller('TouristSpotDetailsCtrl', function($scope){
    $scope.spot = {};   //  観光地JSON
    $scope.desc = "";   //  説明
    
    $scope.init = function(){
        //パラメータ取得
        var options = $scope.myNavi.topPage.data;
        if(options !== undefined){
            $scope.spot = options;
            
            for(var i in $scope.spot.descs){
                $scope.desc +=  $scope.spot.descs[i].body;
            } 
        } else {
            console.log("パラメータ取得失敗"); 
        }
        
        //Google mapの設定
        var mapOptions = {           
              center: new google.maps.LatLng(42.329000, 140.98953),             
              zoom: 12,
              //地図のタイプを指定
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };       

        var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);     
        var myLatlng = new google.maps.LatLng(42.3223,140.958258);
        $scope.markToMap("測量山", myLatlng, map);      
    };
    
    $scope.getShortDesc = function(){
        var ret = $scope.desc;
        if($scope.desc.length >= 50) {
            ret = $scope.desc.substring(0, 50) + "...";
        }
        
        return ret;
    }
     
        
    $scope.markToMap = function(name, position, map){
        var marker = new google.maps.Marker({
            position: position,
            title:name
          });
    
          marker.setMap(map);
          google.maps.event.addListener(marker, 'click', function() {
                  var infowindow = new google.maps.InfoWindow({ content:marker.title });
                  infowindow.open(map,marker);
          });
    };
    
    $scope.init();
});
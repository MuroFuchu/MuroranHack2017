app.controller('SlopeByFatigueCtrl', function($scope,GetJsonService){
    
     $scope.init = function(){
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
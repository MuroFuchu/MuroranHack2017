app.factory('GoogleMapService', function(){ 
    var service = {}; 
    
    service.getMap = function(ele,title,position){
        console.log("Map初期化"); 
        var map = new google.maps.Map(ele, service.getMapOption(position)); 
        
        if(title !== undefined) {
            console.log("初期ポジションマーキング");
            service.markToMap(title, position, map);
        }
        
        return map; 
    };
    
    service.getMapOption = function(position){
        return {           
            center: position,   
            zoom: 12,
            //地図のタイプを指定
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
    };
    
    service.getLatLng = function(latitude, longitude){
        return new google.maps.LatLng(latitude,longitude);        
    };
    
    service.markToMap = function(name, position, map){
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
    
    return service;
});
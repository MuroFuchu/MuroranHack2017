app.factory('GoogleMapService', function(){ 
    var service = {}; 
    
    service.getMap = function(ele,title,position){
        //console.log("Map初期化"); 
        var map = new google.maps.Map(ele, service.getMapOption(position)); 
        
        if(title !== null) {
            //console.log("初期ポジションマーキング");
            service.markToMap(title, null, position, map);
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
    
    service.markToMap = function(name, label, position, map, flg){
        var icon = null;
        if(flg !== "0" && flg !== undefined) {
            icon = {
                url: "http://maps.google.com/mapfiles/ms/icons/blue.png",
                fillOpacity: 0.8
            };
    	}
        
        var marker = new google.maps.Marker({
            position: position,
            label: label,
            icon: icon,
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
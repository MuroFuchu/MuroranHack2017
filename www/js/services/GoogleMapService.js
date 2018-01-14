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
    
    service.getMarker = function(name, label, position, map, flg, callback){
        var url = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
        
        switch(flg){
            case CMN.Icon.Flg.Selected:
                url = "http://maps.google.com/mapfiles/ms/icons/blue.png";
                break;
            case CMN.Icon.Flg.None:
                url = "http://maps.google.com/mapfiles/ms/icons/red.png";
                break;
            case CMN.Icon.Flg.Base:
                url = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
                break;
        }
        
        icon = {
            url: url,
            //fillOpacity: 0.8,
            size: new google.maps.Size(32, 32),
            labelOrigin: new google.maps.Point(15, 10),
            //origin: new google.maps.Point(0, 0),
            //anchor: new google.maps.Point(-4, 0),
            //scaledSize: new google.maps.Size(32, 32)
        };
        var marker =  new google.maps.Marker({
            position: position,
            label: label,
            icon: icon,
            title: name,
            map: map
        });
        
        if(callback !== undefined){
            //marker.addListener('click', callback);
        }
        
        return marker;
    };
    
    service.markToMap = function(name, label, position, map, flg){
        var marker = service.getMarker(name, label, position, map, flg);
    
        marker.setMap(map);
        google.maps.event.addListener(marker, 'click', function() {
            var infowindow = new google.maps.InfoWindow({ content:marker.title });
            infowindow.open(map,marker);
        });
    };
    
    service.marksToMap = function(markers, map){
        service.clearMarkers(markers);
        for(var i in markers){
            var marker = markers[i];
            
            //marker.setMap(marker.getMap());
            marker.setMap(map);
            
            service.markerAddListener(marker, map);
        }
    };
    
    // うまくいかない（ほかのウィンドウを開いても前のものが残る）
    service.markerAddListener = function(marker, map){
//        google.maps.event.addListener(marker, 'click', function() {
//           var infowindow = new google.maps.InfoWindow({ content:marker.title });
//            infowindow.open(map,marker);
//        });
    };
    
    service.clearMarkers = function(markers){
        for(var i in markers){
            var marker = markers[i];
            
            marker.setMap(null);
        }
    };
    
    return service;
});
app.factory('GetJsonService', function(){  
    var service = {};  
    service.MainMenus =[
        {"page":"TouristList","text":"観光地から探す"},
        {"page":"EnjoySlope","text":"坂を楽しむ"},
        {"page":"Exercise","text":"運動する"}
    ];
    
    service.getData = function(){  
      return this.MainMenus;
    };
    return service;
});
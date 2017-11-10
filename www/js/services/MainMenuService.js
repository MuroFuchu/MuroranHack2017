//仮コードGetJsonに移行します
app.factory('MainMenuService', function(){  
   var service = {};  
   service.MainMenus =[
        {"page":"TouristSpotList","text":"観光地から探す"},
        {"page":"EnjoySlope","text":"坂を楽しむ"},
        {"page":"Exercise","text":"運動する"}
      //  {"page":"MyLibrary","text":"Myライブラリ"}
    ];
    
   service.getMenus = function(){  
    return this.MainMenus;
   } 
   return service;
});
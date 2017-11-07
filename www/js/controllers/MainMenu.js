app.controller('MainMenuCtrl',["MainMenuService" , "$scope" , function(MainMenuService,$scope){
    console.log('MainMenuCtrl作成');
    $scope.MainMenuList = null;
    
    $scope.init = function(){
        MainMenuList = JSON.parse(JSON.stringify(MainMenuService.MainMenus));
        //console.log(JSON.parse(JSON.stringify(MainMenuService.MainMenus)));
        //MainMenuList = MainMenuService.MainMenus;
        for(var i in MainMenuList){
            console.log("{0}/{1}".format(MainMenuList[i].page , MainMenuList[i].text));
        }
    };
    
    $scope.MenuClick = function(menu){
        myNavigator.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
    };
    
    init();
}]);
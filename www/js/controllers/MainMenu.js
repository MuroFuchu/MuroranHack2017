app.controller('MainMenuCtrl', function($scope,MainMenuService){

    $scope.MainMenuList = null;
    
    $scope.init = function(){
        $scope.MainMenuList = JSON.parse(JSON.stringify(MainMenuService.getMenus()));
        for(var i in $scope.MainMenuList){
            console.log("{0}/{1}".format($scope.MainMenuList[i].page , $scope.MainMenuList[i].text));
        }
    };
    
    $scope.menuClick = function(menu){
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , menu.page));
        myNavi.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
    };    
    $scope.init();
});
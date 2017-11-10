app.controller('MainMenuCtrl', function($scope/*,MainMenuService*/,GetJsonService){
   
    $scope.MainMenuList = null;
    
    $scope.init = function(){
        /*
        $scope.MainMenuList = JSON.parse(JSON.stringify(MainMenuService.getMenus()));
        

        */
        //$scope.MainMenuList = JSON.parse(JSON.stringify(MainMenuService.getMenus()));
        console.log("MainMenuCtrl初期化");
        GetJsonService.getData("MenuList").then(
            function(res) {
                $scope.MainMenuList = res.data;
                console.log("↓取得データ内容↓");
                for(var i in $scope.MainMenuList){
                    console.log("{0}/{1}".format($scope.MainMenuList[i].page , $scope.MainMenuList[i].text));
                }
                console.log("↑取得データ内容↑");
            }
        );
    };
    
    $scope.menuClick = function(menu){
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , menu.page));
        //$scope.ons.navigator.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
        myNavi.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
    };    
    $scope.init();
});
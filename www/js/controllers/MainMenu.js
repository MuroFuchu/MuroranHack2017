app.controller('MainMenuCtrl', function($scope,GetJsonService){
    $scope.MainMenuList = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            console.log("MainMenuCtrl初期化");
            GetJsonService.getData("MenuList").then(
                function(res) {
                    $scope.MainMenuList = res.data;
                }
            );
        }
    };
    
    $scope.menuClick = function(menu){
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , menu.page));
        myNavi.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
    };    
});
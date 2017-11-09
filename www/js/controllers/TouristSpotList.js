app.controller('TouristSpotListCtrl', function($scope){
   
    //$scope.MainMenuList = null;
    
    $scope.init = function(){
        /*$scope.MainMenuList = JSON.parse(JSON.stringify(MainMenuService.getMenus()));
        for(var i in $scope.MainMenuList){
            console.log("{0}/{1}".format($scope.MainMenuList[i].page , $scope.MainMenuList[i].text));
        }
        */
    };
    
    $scope.linkClick = function(){
        var link = "TouristSpotDetails";
        console.log("{0}{1}.htmlに遷移".format(CMN.Path.Views , link));
        //$scope.ons.navigator.pushPage("{0}{1}.html".format(CMN.Path.Views , menu.page));
        myNavigator.pushPage("{0}{1}.html".format(CMN.Path.Views , link));
    };    
    $scope.init();
});
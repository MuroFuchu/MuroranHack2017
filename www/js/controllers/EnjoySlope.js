app.controller('EnjoySlopeCtrl', function($scope,GetJsonService){
    $scope.List = null;
    
    $scope.init = function(){
        GetJsonService.getData("Theme").then(
            function(res) {
                $scope.List = res.data;
            }
        );
    };
    
    $scope.linkClick = function(theme){
        var link = "RouteByTheme";
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:theme}
        );
    };
    
    $scope.init();
});
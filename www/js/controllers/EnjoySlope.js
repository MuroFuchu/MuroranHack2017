app.controller('EnjoySlopeCtrl', function($scope,GetJsonService){
    $scope.List = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            GetJsonService.getData("Theme").then(
                function(res) {
                    $scope.List = res.data;
                }
            );
        }
    };
    
    $scope.linkClick = function(theme){
        var link = "RouteByTheme";
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:theme}
        );
    };
});
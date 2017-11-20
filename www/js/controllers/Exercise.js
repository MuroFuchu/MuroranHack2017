app.controller('ExerciseCtrl', function($scope){
    
    $scope.init = function(){
       
    };
    
    $scope.getPanIcon = CMN.Icon.GetPan;
    
    $scope.range = function(n) {
        var arr = [];
        for (var i=1; i<=n; ++i) arr.push(i);
        
        return arr;
    };
    
    $scope.linkClick = function(i){
        var link = "SlopeByFatigue";
        myNavi.pushPage(
            "{0}{1}.html".format(CMN.Path.Views , link),
            {data:i}
        );
    };   
    
    $scope.init();
});
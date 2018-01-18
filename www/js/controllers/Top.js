app.controller('TopCtrl', function($scope, DbAccessService){
    $scope.TopImageNo = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            var min = 1, max = 10;
            var r = Math.floor( Math.random() * (max - min + 1) ) + min;
            $scope.TopImageNo = ("0"+r).slice(-2);
            
            DbAccessService.openDb();
        }
    };
});
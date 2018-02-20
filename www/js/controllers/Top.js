app.controller('TopCtrl', function($scope, DbAccessService){
    $scope.TopImageNo = null;
    $scope.a = null;
    $scope.b = null;
    
    this.init = function(e){
        if (e.target === e.currentTarget) {
            var min = 1, max = 10;
            var r = Math.floor( Math.random() * (max - min + 1) ) + min;
            $scope.TopImageNo = ("0"+r).slice(-2);
            
            // データを作るために無駄にSelectしてみる            
            DbAccessService.GetAllSlope();
            /*
            var option = {
                timeout: 6000   //タイムアウト値(ミリ秒)
            };
            
            navigator.geolocation.getCurrentPosition(
                function(position){
                    $scope.a = position.coords.latitude;
                    $scope.b = position.coords.longitude;
                },
                function(){
                    console.log("error");
                },
                option
            );
            */
        }
    };
});
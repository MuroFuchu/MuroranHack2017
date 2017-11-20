app.factory('DbAccessService', function($q, GetJsonService){ 
    var service = {};
    service.db = null;
    
    DbInit = function() {
        console.log('DB初期化');
        
        GetJsonService.getData("InitSlopeData").then(
            function(res) {
                service.db.MstSlope.bulkAdd(res.data);
            }
        );
        
    };
    
    service.openDb = function (){
        service.db = new Dexie("SlopeDatabase");
        service.db.version(1).stores({
            MstSlope: "++SlopeId,SlopeName,Latitude,Longitude,Address,Pan,FiileName,Explanation,SceneryFlg,SeasonFlg,HistoryFlg,GeographyFlg,RareFlg,CompleteFlag,CompleteDate"
        });
        //初期化
        service.db.on("populate", DbInit);
        
        return;
    };
    
    service.GetSlope = function (){
        if(service.db !== undefined){
            service.openDb();
        }
        
        return service.db.MstSlope;
    };
    
    service.GetSlopeByLL = function(latitude, longitude){
        var half = 0.025;
        var ret = service.GetSlope()
            .where("Latitude").between(latitude-half,latitude+half)
            //.and("Longitude").between(longitude-half,longitude+half);
            .and(function(slope) {
                return longitude-half <= slope.Longitude && slope.Longitude <= longitude+half;
            });
        
        return ret.toArray();
    };
    
    service.GetSlopeByPan = function(pan){
        var ret = service.GetSlope()
            .where("Pan").equals(pan);
        
        return ret.toArray();
    };
    
    service.GetSlopeByTheme = function(theme){
        var ret = service.GetSlope()
            .where(theme).notEqual("0");
        
        return ret.toArray();
    };
    
    
    
    
    return service;
});
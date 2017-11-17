app.factory('DbAccessService', function($q){ 
    var service = {};
    service.db = null;
    
    DbInit = function() {
        console.log('DB初期化');
        service.db.transaction(
            function(tx){
                console.log('Table作成');
                tx.executeSql("DROP TABLE IF EXISTS MstSlope");
                tx.executeSql("Create Table IF NOT EXISTS MstSlope(SlopeId unique,SlopeName,Latitude,Longitude,Pan,FiileName,Explanation,SceneryFlg,SeasonFlg,HistoryFlg,GeographyFlg,RareFlg,CompleteFlag)");
                
                // テストデータを叩き込む
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('001','坂001',42.347147,140.927688)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('002','坂002',42.325055,140.943839)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('003','坂003',42.326998,140.942144)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('004','坂004',42.304806,141.003658)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('005','坂005',42.335468,140.930639)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('006','坂006',42.333975,141.010673)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('007','坂007',42.342042,140.943742)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('008','坂008',42.305698,140.989976)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('009','坂009',42.362851,141.000206)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('010','坂010',42.342027,140.943713)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('011','坂011',42.302856,141.000815)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('012','坂012',42.322263,140.970311)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('013','坂013',42.318982,140.948687)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('014','坂014',42.369412,140.931099)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('015','坂015',42.335634,140.931429)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('016','坂016',42.322193,140.958344)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('017','坂017',42.302856,141.005617)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('018','坂018',42.336954,140.94203)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('019','坂019',42.331136,141.017479)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('020','坂020',42.346947,140.927488)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('021','坂021',42.324855,140.943639)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('022','坂022',42.326798,140.941944)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('023','坂023',42.304606,141.003458)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('024','坂024',42.335268,140.930439)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('025','坂025',42.333775,141.010473)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('026','坂026',42.341842,140.943542)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('027','坂027',42.305498,140.989776)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('028','坂028',42.362651,141.000006)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('029','坂029',42.341827,140.943513)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('030','坂030',42.302656,141.000615)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('031','坂031',42.322063,140.970111)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('032','坂032',42.318782,140.948487)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('033','坂033',42.369212,140.930899)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('034','坂034',42.335434,140.931229)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('035','坂035',42.321993,140.958144)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('036','坂036',42.302656,141.005417)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('037','坂037',42.336754,140.94183)");
                tx.executeSql("INSERT INTO MstSlope (SlopeId,SlopeName,Latitude,Longitude) VALUES('038','坂038',42.330936,141.017279)");
            }, 
            function(){
                // 失敗時
            }, 
            function(){
                // 成功時
                console.log('初期データ投入完了');
            }
        );
    };
    
    querySuccess = function (tx, results) {
        console.log('初期データ確認');
        for (var i in results.rows){
            var row = results.rows[i];
            console.log("{0}/{1}".format(row.SlopeId, row.SlopeName));
        }        
    };
    
    service.openDb = function (){
        service.db = window.openDatabase("Slope", "", "百名坂", 1024*1024*3);
        if(service.db.version == "") {
            console.log('not exist db');
            DbInit();
            service.db.changeVersion("", "1.0");
        }else{
            console.log('exist db'); 
        }
        
        return;
    };
    
    service.GetSlope = function (params){
        if(service.db !== undefined){
            service.openDb();
        }
        
        //var fil = [];
        var fil = "";
        var half = 0.0005;  //半径
        if(params !== undefined){
            // 緯度
            if(params.latitude !== undefined){
                //fil.push("AND Latitude BETWEEN {0} AND {1} ".format(params.latitude - half , params.latitude + half));
                fil += "AND Latitude BETWEEN {0} AND {1} ".format(params.latitude - half , params.latitude + half);
            }
            // 経度
            if(params.longitude !== undefined){
                //fil.push("AND Latitude BETWEEN {0} AND {1} ".format(params.longitude - half , params.longitude + half));
                fil += "AND Longitude BETWEEN {0} AND {1} ".format(params.longitude - half , params.longitude + half);
            }
            // 筋肉疲労度
            if(params.pan !== undefined){
                //fil.push("AND Pan = '{0}' ".format(params.pan));
                fil += "AND Pan = '{0}' ".format(params.pan);
            }
            // 景色フラグ
            if(params.sceneryFlg !== undefined){
                //fil.push("AND SceneryFlg = '{0}' ".format(params.sceneryFlg));
                fil += "AND SceneryFlg = '{0}' ".format(params.sceneryFlg);
            }
            // 季節フラグ
            if(params.seasonFlg !== undefined){
                //fil.push("AND SeasonFlg = '{0}' ".format(params.seasonFlg));
                fil += "AND SeasonFlg = '{0}' ".format(params.seasonFlg);
            }
            // 歴史フラグ
            if(params.historyFlg !== undefined){
                //fil.push("AND HistoryFlg = '{0}' ".format(params.historyFlg));
                fil += "AND HistoryFlg = '{0}' ".format(params.historyFlg);
            }
            // 地形フラグ
            if(params.geographyFlg !== undefined){
                //fil.push("AND GeographyFlg = '{0}' ".format(params.geographyFlg));
                fil += "AND GeographyFlg = '{0}' ".format(params.geographyFlg);
            }
            // レアフラグ
            if(params.rareFlg !== undefined){
                //fil.push("AND RareFlg = '{0}' ".format(params.rareFlg));
                fil += "AND RareFlg = '{0}' ".format(params.rareFlg);
            }
        }
                
        var deferred = $q.defer();
        service.db.transaction(
            function(tx){
                console.log("坂マスタ取得SQL");
                //tx.executeSql("SELECT * FROM MstSlope WHERE 1 = 1 ?", fil, function(tx, results){
                console.log("SELECT * FROM MstSlope WHERE 1 = 1 " + fil);
                tx.executeSql("SELECT * FROM MstSlope WHERE 1 = 1 " + fil, [], function(tx, results){
                    console.log("後追いバインド");
                    //angular.extend(ret, results.rows);
                    //ret = results.rows;
                    deferred.resolve(results.rows);
                });
            }, 
            function(){
                // 失敗時
            }, 
            function(){
                // 成功時
                console.log('坂マスタ取得完了');
            }
        );
        return deferred.promise;
    };
    return service;
});
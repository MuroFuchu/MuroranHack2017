app.factory('DbAccessService', function($q){ 
    var service = {};
    service.db = null;
    
    DbInit = function() {
        console.log('DB初期化');
        service.db.transaction(
            function(tx){
                console.log('Table作成');
                tx.executeSql("DROP TABLE IF EXISTS MstSlope");
                tx.executeSql("Create Table IF NOT EXISTS MstSlope(SlopeId unique,SlopeName,Latitude,Longitude,Address,Pan,FiileName,Explanation,SceneryFlg,SeasonFlg,HistoryFlg,GeographyFlg,RareFlg,CompleteFlag)");
                
                // テストデータを叩き込む
                tx.executeSql("INSERT INTO MstSlope VALUES('001','室蘭地名発祥の坂','42.374301','140.924694','崎守町１６２','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('002','問屋(とんや)の坂','42.324675','140.968635','海岸町3丁目','4','','海岸町、日本一の坂から200ｍ祝津寄り、標識有り','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('003','西小路の坂','42.325182','140.966702','西小路町','1','','西小路町にある勾配率23％の急坂、昔は「丹波の沢」とも呼ばれていた','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('004','日本一(にほんいち)の坂','42.322496','140.969185','海岸町2丁目2','5','','海岸町、旧室蘭駅舎向かいの室蘭釣具店横の小路、標識有り','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('005','幕(まく)西(にし)の坂','42.31994','140.970504','幕西町','1','','幕西町、室蘭プリンスホテルの駐車場とカフェ英国館の間を測量山に向かって上がるのが「幕西の坂」','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('006','八  幡  坂（はちまんざか）','42.321545','140.969539','海岸町6丁目','2','','','1','3','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('007','仏坂','42.316587','140.979551','山手町1丁目','2','','ＮＨＫ室蘭放送局前','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('008','ラッパ森','42.317731','140.994593','御前水町3丁目3','2','','母恋駅から御崎町へ向かう坂を上る小高い丘','1','2','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('009','牛(ぎゅう)太郎坂(たろうざか)','42.352855','141.005034','中島本町1丁目13','3','','中島本町、中島スポーツセンター裏手、標識有り','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('010','東小路の坂 または 丸井さんの坂','42.319733','140.971565','中央町1丁目2','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('011','栗林の坂　（本宅の坂）','42.316176','140.969727','常盤町6丁目20','2','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('012','ウスイの坂（水汲道）','0','0','','','','','','','','','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('013','病院坂','42.31821','140.970536','常盤町1','2','','常盤町と中央町の境にある測量山に至る坂','1','1','1','0','0','0')");
               /*
                tx.executeSql("INSERT INTO MstSlope VALUES('014','地球岬/アジサイロード','42.304772','140.998951','母恋南町４丁目','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('015','トッカリショ','42.309935','141.005449','母恋南町３丁目','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('016','チャラツナイ展望台','42.305814','140.989786','母恋南町１丁目','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('017','金屏風','42.304786','141.003588','母恋南町','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('018','祝津展望台','42.337045','140.942017','絵鞆町１丁目７-１８','2','','','1','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('019','絵鞆岬（絵鞆町～港南町）','42.336049','140.932011','絵鞆町２丁目','3','','','1','1','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('020','ハルカラモイ','42.325038','140.943791','増市町２丁目','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('021','清水丘高校','42.3233337','140.9492576','増市町２丁目６−１６','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('022','幌萌町のエゾヤマザクラ','42.371502','140.975134','幌萌町７０','2','','','1','1','1','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('023','室蘭うずら園','42.395072','140.972703','石川町２８２-５','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('024','崎守町の一本サクラ','42.386407','140.963716','崎守・香川通','1','','','1','1','1','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('025','だんパラ公園','42.408226','140.999546','室蘭岳通','4','','','1','2','0','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('026','御傘山神社通','42.323489','140.998887','御前水町１丁目１２−３','3','','','1','3','1','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('027','あんぽんたんの木','42.365894','141.02597','知利別町4-27','1','','','1','1','1','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('028','室蘭工業大学','42.37829','141.02997','水元町11','','','','1','1','1','','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('029','中島・港北通','42.3565808','141.0110024','中島町1-3','2','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('030','製鉄記念病院～天神トンネル','42.358531','141.015573','八丁平4-17','2','','','0','1','0','0','0','0')");
                /*
                tx.executeSql("INSERT INTO MstSlope VALUES('031','知利別公園前の坂','42.367338','141.029518','知利別町4丁目','3','','','0','1','0','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('032','楽山','42.360955','141.027007','知利別町2丁目','2','','','0','3','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('033','室蘭環状線(工大生殺しの坂)','42.370317','141.027051','天神町１丁目','1','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('034','水元通（道道107号線）(工大ロード)','42.365394','141.036481','高砂町3-15','1','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('035','水元国際スキー場','42.381685','141.033835','水元町60','1','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('036','明徳寮への道','42.385115','141.032968','水元町49','1','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('037','水元国際展望台','42.381127','141.03009','水元町62','3','','','0','1','0','1','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('038','不動尊清瀧寺(天神神社)の坂','42.372334','141.028723','天神町18','2','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('039','鷲別川の坂','42.370387','141.037613','高砂町4-35','1','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('040','テントウムシの坂','42.379647','141.029929','水元町20','2','','','0','1','0','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('041','高砂大通','42.371277','141.035712','高砂町4丁目','2','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('042','高砂中央通','42.359774','141.03979','高砂町1丁目38','2','','','0','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('043','マンチェスターの丘','42.328664','141.016239','みゆき町３丁目','1','','','1','3','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('044','高平から37号に降りる坂から','42.3570563','140.9916499','高平町','1','','','1','1','1','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('045','モロラン陣屋・砲台・番所跡 ','42.3751407','140.9207091','崎守町','1','','崎守町の室蘭地名発祥の坂を登って行くと，陣屋・砲台・番所の跡があります','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('046','港北公園','42.36827','140.992','港北町２丁目','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('047','測量山観光道路ジョギングコース（初級7.5km）','42.327044','140.941999','絵鞆町','1','','','1','1','0','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('048','鷲別岬','42.351615','141.054216','日の出町','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('049','東陽軒跡地','42.319671','140.970753','中央町1丁目2','1','','','1','1','1','0','1','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('050','本輪西駅','42.35894','140.977675','本輪西町1丁目','1','','','1','1','1','0','0','0')");
                tx.executeSql("INSERT INTO MstSlope VALUES('051','「海に生くる人々」葉山嘉樹 ','42.323605','140.97486','入江町1丁目','1','','','1','1','1','0','0','0')");
<<<<<<< HEAD
               */
=======
                */
>>>>>>> 3eacf48dae741f75d9a76dea0c1f9db10214c6e5
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
<<<<<<< HEAD
        console.log('set db');
        service.db = window.openDatabase("Slope", "", "百名坂", (1024*1024)-1);
=======
        service.db = window.openDatabase("Slope", "", "百名坂", 1024);
>>>>>>> 3eacf48dae741f75d9a76dea0c1f9db10214c6e5
        if(service.db.version !== "") {
            console.log('not exist db');
            DbInit();
            service.db.changeVersion("", "0.1");
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
        var half = 0.025;  //半径
        if(params !== undefined){
            // 緯度
            if(params.latitude !== undefined){
                //fil.push("AND Latitude BETWEEN {0} AND {1} ".format(params.latitude - half , params.latitude + half));
                fil += "AND Latitude BETWEEN '{0}' AND '{1}' ".format((params.latitude - half) , (params.latitude + half));
            }
            // 経度
            if(params.longitude !== undefined){
                //fil.push("AND Latitude BETWEEN {0} AND {1} ".format(params.longitude - half , params.longitude + half));
                fil += "AND Longitude BETWEEN '{0}' AND '{1}' ".format((params.longitude - half) , (params.longitude + half));
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
                console.log(fil);
                tx.executeSql("SELECT * FROM MstSlope WHERE 1 = 1 " + fil, [], function(tx, results){
                    console.log("後追いバインド");
                    //angular.extend(ret, results.rows);
                    //ret = results.rows;
                    var ret = [];
                    for(var i in results.rows){
                        var row = results.rows[i];
                        if(row.SlopeId !== undefined){
                            ret.push(row);
                        }
                    }
                    
                    deferred.resolve(ret);
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
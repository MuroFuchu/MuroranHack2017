app.factory('GetJsonService', function($http){ 
  var service = {};  
  service.getData = function(file){
    var url = "{0}{1}.json".format(CMN.Path.Datas, file);
    console.log("JSON取得処理開始：" + url);
    return $http.get(url)
      .success(function(data, status, headers, config) {
        console.log("JSON取得成功：" + url);
        return data;
      }).error(function(data, status, headers, config) {
        console.log("JSON取得エラー：" + url);
        /*
        console.log(data);
        console.log(status);
        console.log(headers);
        */
      });
  };
  return service;
});
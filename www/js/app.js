function importJS() {  
    var scripts = new Array(
        'js/controllers/MainMenu.js',
        'js/controllers/EnjoySlope.js',
        'js/controllers/Exercise.js',
        'js/controllers/MyLibrary.js',
        'js/controllers/RouteByTheme.js',
        'js/controllers/RouteDetails.js',
        'js/controllers/SlopeByFatigue.js',
        'js/controllers/SlopeDetails.js',
        'js/controllers/TouristSpotDetails.js',
        'js/controllers/TouristSpotList.js',
        'js/services/DbAccessService.js',
        'js/services/GetJsonService.js',
        'js/services/GoogleMapService.js',
        'js/services/openfb.js'
    );
    for (var i=0; i < scripts.length; i++) {
        document.write('<script type="text/javascript" src="' +scripts[i] +'"></script>');
    }
}
importJS();
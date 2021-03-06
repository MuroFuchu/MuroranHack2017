function importJS() {  
    var scripts = new Array(
        'js/services/DbAccessService2.js',
        'js/controllers/Top.js',
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
        'js/lib/dexie.min.js',
        'js/lib/widgets.js',
        'js/lib/openfb.js',
        'js/services/GetJsonService.js',
        'js/services/GoogleMapService.js'
    );
    for (var i=0; i < scripts.length; i++) {
        document.write('<script type="text/javascript" src="' +scripts[i] +'"></script>');
    }
}
importJS();
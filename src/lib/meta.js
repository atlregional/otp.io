var geojsonRandom = require('geojson-random'),
    geojsonExtent = require('geojson-extent'),
    http = require('http'),
    merge = require('turf-merge'),
    intersect = require('turf-intersect');
// var $ = require('jquery'),
//     XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// $.support.cors = true;

module.exports.clear = function(context) {
    context.data.clear();
};

module.exports.random = function(context, count, type) {
    context.data.mergeFeatures(geojsonRandom(count, type).features, 'meta');
};

module.exports.bboxify = function(context) {
    context.data.set({ map: geojsonExtent.bboxify(context.data.get('map')) });
};

module.exports.otpify = function(context) {
    // context.data.set({ map: otpify(context.data.get('map')) });
    var features = context.data.get('map').features;
    console.log(features);
    $.each(features, function(i, feature){
      if (feature.geometry.type === 'Point'){
        feature.properties.url = 'http://opentrip.atlantaregion.com/otp-leaflet-client/?module=planner&fromPlace='+feature.geometry.coordinates[1]+','+feature.geometry.coordinates[0]+'&toPlace='+features[features.length - 1].geometry.coordinates[1]+','+features[features.length - 1].geometry.coordinates[0]+'&mode=TRANSIT%2CWALK&maxWalkDistance=3218.688&arriveBy=false&showIntermediateStops=false&itinIndex=0';
      }
    });
    context.data.set({});
};
var request = require('request');
var getJsonFromJsonP = function (url, callback) {
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var jsonpData = body;
    var json;
    //if you don't know for sure that you are getting jsonp, then i'd do something like this
    try
    {
       json = JSON.parse(jsonpData);
    }
    catch(e)
    {
        var startPos = jsonpData.indexOf('({');
        var endPos = jsonpData.indexOf('})');
        var jsonString = jsonpData.substring(startPos+1, endPos+1);
        json = JSON.parse(jsonString);
    }
    callback(null, json);
  } else {
    callback(error);
  }
})
}
module.exports.isochrones = function(context) {
  var response = prompt('Commute time in minutes (default: 30)');
  if (response === null) return;
  var seconds = parseInt(response, 10) * 60;
  if (isNaN(seconds)) seconds = 30 * 60;
	console.log(context.data.get('map'));
  var map = context.data.get('map')
  // var features = map.features;
  var isochrones = [];
  var geojson;
  var features = [];
  var geoLayer;

  console.log(context)
  var merged;
  var blank = { "type": "FeatureCollection",
    "features": []};
  var done;

    $.each(map.features, function(i, feature){
      
        var url = 'http://192.168.1.66' + '/otp-rest-servlet/ws/isochrone?algorithm%20=accSampling&fromPlace='+ feature.geometry.coordinates[1] + ',' + feature.geometry.coordinates[0]+'&date=2014/10/07&time=8:30:00&maxWalkDistance=1000&mode=WALK,TRANSIT&cutoffSec='+seconds;
        $.ajax({
            url: url,
            type: "GET",
            dataType: "jsonp", 
            success: function( data ) {
              if (i !== map.features.length - 1){
                console.log(data)
                // merged = merge(data);
                $.each(data.features, function(i, feat){
                  blank.features.push(feat);
                })
                // blank.features.push(merged)
                // done = merge(blank);
                geojson = data;
                console.log(blank)
                // console.log(done)
                features.push(geojson.features);
              }
              else{
                console.log(i)
                // console.log(blank)
                // var done = merge(blank);
                // console.log(done)
              }
              geoLayer = L.geoJson(geojson, {

                style: function (feature) {
                  switch (feature.properties.Time) {
                          case 900: return {fillColor: "#e31a1c", fillOpacity: 0.05, weight: 0};
                          case 1800: return {fillColor: "#fd8d3c", fillOpacity: 0.05, weight: 0};
                          case 2700: return {fillColor: "#fecc5c", fillOpacity: 0.05, weight: 0};
                          case 3600: return {fillColor: "#ffffb2", fillOpacity: 0.05, weight: 0};
                      }
                },

                // onEachFeature: onEachFeature,

                pointToLayer: function (feature, latlng) {
                  return L.circleMarker(latlng, {
                    radius: 8,
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                  });
                }
              }).addTo(window.api.map);

              // console.log(data)

              // adds data into dataset
              // context.data.mergeFeatures(geojson.features, 'map');
            }
        });
      
      
    });
    
    
};
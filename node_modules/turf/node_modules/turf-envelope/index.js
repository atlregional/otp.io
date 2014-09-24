var extent = require('turf-extent')
var bboxPolygon = require('turf-bbox-polygon')

module.exports = function(features, done){
  var bbox = extent(features)
  var poly = bboxPolygon(bbox)
  return poly
}
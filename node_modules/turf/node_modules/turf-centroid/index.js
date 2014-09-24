var explode = require('turf-explode')
var point = require('turf-point')

module.exports = function(features){
  var vertices = explode(features).features,
    xSum = 0,
    ySum = 0,
    len = vertices.length

  for (var i = 0; i < len; i++) {
    xSum += vertices[i].geometry.coordinates[0]
    ySum += vertices[i].geometry.coordinates[1]
  }

  return point(xSum / len, ySum / len)
}

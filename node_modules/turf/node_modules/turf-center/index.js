var extent = require('turf-extent')

module.exports = function(layer, done){
  var ext = extent(layer)
  var x = (ext[0] + ext[2])/2
  var y = (ext[1] + ext[3])/2
  var center = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [x, y]
    }
  }
  return center
}
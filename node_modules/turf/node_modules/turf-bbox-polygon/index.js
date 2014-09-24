var polygon = require('turf-polygon')

module.exports = function(bbox){
  var lowLeft = [bbox[0], bbox[1]]
  var topLeft = [bbox[0], bbox[3]]
  var topRight = [bbox[2], bbox[3]]
  var lowRight = [bbox[2], bbox[1]]

  var poly = polygon([[
    lowLeft,
    lowRight,
    topRight,
    topLeft,
    lowLeft
  ]])
  return poly
}

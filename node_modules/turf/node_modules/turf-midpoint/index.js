// http://cs.selu.edu/~rbyrd/math/midpoint/
// ((x1+x2)/2), ((y1+y2)/2)
var point = require('turf-point')

module.exports = function(point1, point2) {
  if(point1 === null || point2 === null || point1 && point2 === null){
    return new Error('Less than two points passed.')
  }

  var x1 = point1.geometry.coordinates[0];
  var x2 = point2.geometry.coordinates[0];
  var y1 = point1.geometry.coordinates[1];
  var y2 = point2.geometry.coordinates[1];

  var x3 = x1 + x2;
  var midX = x3/2;
  var y3 = y1 + y2;
  var midY = y3/2;

  var midpoint = point(midX, midY);

  return midpoint
}
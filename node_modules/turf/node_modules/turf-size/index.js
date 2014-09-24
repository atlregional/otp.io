module.exports = function(bbox, factor){
  var currentXDistance = (bbox[2] - bbox[0]) 
  var currentYDistance = (bbox[3] - bbox[1])
  var newXDistance = currentXDistance * factor
  var newYDistance = currentYDistance * factor
  var xChange = newXDistance - currentXDistance
  var yChange = newYDistance - currentYDistance

  var lowX = bbox[0] - (xChange / 2)
  var lowY = bbox[1] - (yChange / 2)
  var highX = (xChange / 2) + bbox[2]
  var highY = (yChange / 2) + bbox[3]

  var sized = [lowX, lowY, highX, highY]
  return sized
}
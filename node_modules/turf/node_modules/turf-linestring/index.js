module.exports = function(coordinates, properties){
  if(!coordinates) return new Error('No coordinates passed')
  var linestring = { 
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": coordinates
    },
    "properties": properties
  }
  return linestring
}

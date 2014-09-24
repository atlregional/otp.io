var test = require('tape')
var center = require('./')
var fc = require('./geojson/fc')

test('center', function(t){
  var centered = center(fc)

  t.ok(centered, 'should return the proper center for a FeatureCollection')
  t.deepEqual(centered.geometry.coordinates, [84.4, 0.4])

  t.end()
})
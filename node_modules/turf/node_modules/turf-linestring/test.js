var test = require('tape');
var lineString = require('./')

test('lineString', function(t){
  t.plan(4)

  var line = lineString([[5, 10], [20, 40]], {name: 'test line'})

  t.ok(line);
  t.equal(line.geometry.coordinates[0][0], 5)
  t.equal(line.geometry.coordinates[1][0], 20)
  t.equal(line.properties.name, 'test line')
});
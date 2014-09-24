turf-linestring
===============
[![Build Status](https://travis-ci.org/Turfjs/turf-linestring.svg?branch=master)](https://travis-ci.org/Turfjs/turf-linestring)

Creates a geojson linestring Feature based on a coordinate array. Properties can be added optionally.

```js
var linestring = require('turf-linestring')

var linestring1 = linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]])
var linestring2 = linestring([[102.0, -10.0], [103.0, 1.0], [104.0, 0.0], [130.0, 4.0]],
  {name: 'line 1', distance: 145})
  
console.log(linestring1)
console.log(linestring2)
```
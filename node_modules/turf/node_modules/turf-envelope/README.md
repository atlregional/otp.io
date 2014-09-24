turf-envelope
=============
[![Build Status](https://travis-ci.org/Turfjs/turf-envelope.svg?branch=master)](https://travis-ci.org/Turfjs/turf-envelope)

Takes a Feature or FeatureCollection and returns a rectangular polygon feature that encompasses all vertices.

```javascript
var envelope = require('turf-envelope')
var point = require('turf-point')
var featurecollection = require('turf-featurecollection')

var pt1 = point(-75.343, 39.984, {name: 'Location A'})
var pt2 = point(-75.833, 39.284, {name: 'Location B'})
var pt3 = point(-75.534, 39.123, {name: 'Location C'})
var fc = featurecollection([pt1, pt2, pt3])

var enveloped = envelope(fc)

console.log(envelopePoly)
```
turf-centroid
=============
[![Build Status](https://travis-ci.org/Turfjs/turf-centroid.svg)](https://travis-ci.org/Turfjs/turf-centroid)

Calculates the centroid of a polygon Feature or FeatureCollection using the geometric mean of all vertices. This lessens the effect of small islands and artifacts when calculating the centroid of a set of polygons.

###Install

```sh
npm install turf-centroid
```

###Parameters

|name|description|
|---|---|
|fc|A Feature or FeatureCollection of any type|

###Usage

```js
centroid(fc)
```

###Example

```javascript
var centroid = require('turf-centroid')
var polygon = require('turf-polygon')

var poly = polygon([[[0,0], [0,10], [10,10] , [10,0]]])

var centroidPt = centroid(poly)

console.log(centroidPt) // a point at 5, 5
```
turf-bboxPolygon
================
[![Build Status](https://travis-ci.org/Turfjs/turf-bboxPolygon.svg?branch=master)](https://travis-ci.org/Turfjs/turf-bboxPolygon)

Takes a bbox and returns the equivalent polygon feature.

###Install

```sh
npm install turf-bbox-polygon
```

###Parameters

|name|description|
|---|---|
|bbox|Bounding box array in the form: ```[xLow, yLow, xHigh, yHigh]```|

###Usage

```js
bboxPoly(bbox)
```

###Example

```js
var bboxPoly = require('turf-bbox-polygon')

var bbox = [0,0,10,10]

var poly = bboxPoly(bbox)

console.log(poly)
```
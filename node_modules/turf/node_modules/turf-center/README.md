turf-center
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-center.svg)](https://travis-ci.org/Turfjs/turf-center)

Calculates the absolute center point of all features.

###Install

```sh
npm install turf-center
```

###Parameters

|name|description|
|---|---|
|fc|A Feature or FeatureCollection of any type|

###Usage

```js
center(fc)
```

###Example

```js
var center = require('turf-center')
var fs = require('fs')

var fc = fs.readFileSync('path/to/file/example.geojson', function(layer, err){
var centerPt = center(fc)

console.log(center)
```
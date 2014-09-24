turf-sample
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-sample.svg)](https://travis-ci.org/Turfjs/turf-sample)

Takes a feature collection and returns N random features as a feature collection.

###Install

```sh
npm install turf-sample
```

###Parameters

|name|description|
|---|---|
|fc|a FeatureCollection|
|num|number of features to sample|

###Usage

```js
sample(fc, num)
```

###Example

```js
var sample = require('turf-sample')
var fs = require('fs')

var pts = JSON.parse(fs.readFileSync('/path/to/pts.geojson'))
var num = 10

var sampled = sample(pts, num)

console.log(sampled)
```
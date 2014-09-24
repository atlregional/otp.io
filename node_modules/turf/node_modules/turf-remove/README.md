turf-remove
===========
[![Build Status](https://travis-ci.org/Turfjs/turf-remove.svg)](https://travis-ci.org/Turfjs/turf-remove)

Removes any features from a feature collection that match a property value.

###Install

```sh
npm install turf-remove
```

###Parameters

|name|description|
|---|---|
|fc|A FeatureCollection|
|property|Property to check|
|value|Value for features to remove|

###Usage

```js
remove(fc, property, value)
```

###Example

```js
var remove = require('turf-remove')
var point = require('turf-point')
var featurecollection = require('turf-featurecollection')

var trees = t.featurecollection([t.point(1,2, {species: 'oak'}),
                                 t.point(2,1, {species: 'dogwood'}),
                                 t.point(3,1, {species: 'maple'})])

var remaining = remove(points, 'species', 'dogwood')

console.log(remaining)
```
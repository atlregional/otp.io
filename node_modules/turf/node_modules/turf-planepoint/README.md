turf-planepoint
===============
[![Build Status](https://travis-ci.org/Turfjs/turf-planepoint.svg?branch=master)](https://travis-ci.org/Turfjs/turf-planepoint)

Takes a trianglular plane and calculates the z value for a point on the plane.

###Install

```sh
npm install turf-planepoint
```

###Parameters

|name|description|
|---|---|
|point|point to interpolate the z value for|
|triangle|a triangle with a,b,c properties representing a plane|

###Usage

```js
planepoint(point, triangle)
```

###Example

```javascript
var planepoint = require('turf-planepoint')
var point = require('turf-point')
var polygon = require('turf-polygon')

var point = t.point(-75.3221, 39.529)
// triangle is a polygon with "a", "b", and "c" values representing
// the values of the coordinates in order.
var triangle = polygon(
    [[[-75.1221,39.57],[-75.58,39.18],[-75.97,39.86]]],
    {"a": 11, "b": 122, "c": 44})

var zValue = planepoint(point, triangle)

console.log(zValue)
```
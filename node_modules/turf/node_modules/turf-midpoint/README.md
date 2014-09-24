turf-midpoint
=============
[![Build Status](https://travis-ci.org/Turfjs/turf-midpoint.svg?branch=master)](https://travis-ci.org/Turfjs/turf-midpoint)

Takes two point features and returns the mid point.

###Install

```sh
npm install turf-midpoint
```

###Parameters

|name|description|
|---|---|
|pt1|a point|
|pt2|a point|

###Usage

```js
midpoint(pt1, pt2)
```

###Example


```js
var midpoint = require('turf-midpoint')
var point = require('turf-point')

var pt1 = point(0,0)
var pt2 = point(10, 0)

var midpointed = midpoint(pt1, pt2)

console.log(midpointed)
```


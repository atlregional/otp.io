turf-size
=========
[![Build Status](https://travis-ci.org/Turfjs/turf-size.svg)](https://travis-ci.org/Turfjs/turf-size)

Takes a bbox and returns a new bbox with a size expanded or contracted by a factor of X.

###Install

```sh
npm install turf-size
```

###Parameters

|name|description|
|---|---|
|bbox|[xmin, ymin, xmay, ymax]|
|factor|the factor to increase or decrease size by|

###Usage

```js
size(bbox, factor)
```

###Example

```js
var bbox = [0, 0, 10, 10]

var doubled = size(bbox, 2)

console.log(doubled) // [-10, -10, 20, 20]
```
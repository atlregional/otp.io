// http://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array

featureCollection = require('turf-featurecollection')

module.exports = function(fc, num){
  var outFC = featureCollection(getRandomSubarray(fc.features, num))
  return outFC
}

function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0), i = arr.length, min = i - size, temp, index;
  while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
  }
  return shuffled.slice(min);
}
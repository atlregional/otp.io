var ss = require('simple-statistics')

module.exports = function(fc, field, percentiles){
  var vals = []
  var quantiles = []

  fc.features.forEach(function(feature){
    vals.push(feature.properties[field])
  })
  percentiles.forEach(function(percentile){
    quantiles.push(ss.quantile(vals, percentile * .01))
  })
  
  return quantiles
}

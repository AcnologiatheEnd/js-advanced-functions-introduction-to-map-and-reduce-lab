// Your code here
function mapToNegativize(source) {
 return source.map(num => num * -1)
}

function mapToNoChange(source) {
  return source.map(num => num)
}

function mapToDouble(source) {
  return source.map(num => num*2)
}

function mapToSquare(source) {
  return source.map(num => num**2)
}

function reduceToTotal(source, starting) {
  return source.reduce(function(total, element){ return total + element}, starting)
}

//let totalBatteries = batteryBatches.reduce(function(total, batch){ return batch + total}, 0)
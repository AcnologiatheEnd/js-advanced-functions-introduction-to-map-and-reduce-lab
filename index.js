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

function reduceToTotal(source, starting = 0) {
  return source.reduce(function(total, element){ return total + element}, starting)
}

function reduceToAllTrue(source) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) {
      return false
    }
  }
  return true
}
//let totalBatteries = batteryBatches.reduce(function(total, batch){ return batch + total}, 0)
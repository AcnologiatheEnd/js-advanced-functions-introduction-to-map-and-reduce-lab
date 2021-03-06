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
  for (let i = 0; i < source.length; i++) {
    if (!source[i]) {
      return false
    }
  }
  return true
}

function reduceToAnyTrue(source) {
 for (let i = 0; i < source.length; i++) {
    if (source[i]) {
      return true
    }
  }
  return false
}

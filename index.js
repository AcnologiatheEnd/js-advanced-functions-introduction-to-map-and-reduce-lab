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
  init = starting
  source.reduce(function(init, ))
  
}

//let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ return element * 2 + total})
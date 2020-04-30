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
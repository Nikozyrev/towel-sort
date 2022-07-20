
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0) {
    return []
  }
  const matrixReversed = matrix.map( (element, index) => {
    if (index%2 !== 0) {
      return element.reverse()
    } else {
      return element
    }
  })
  let result = []
  matrixReversed.forEach(element => {
    element.forEach(el => {
      result.push(el)
    })
  })
  return result
}
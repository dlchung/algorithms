// https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  const towerArr = new Array
  const width = " ".repeat(nFloors + (nFloors + 1)).length
  
  for(i = 0; i < nFloors; i++) {
    const oddNum = i + (i + 1)
    const spacing = " ".repeat(((width - oddNum) / 2) - 1)
    let str = spacing + "*".repeat(oddNum) + spacing
    towerArr.push(str)
  }
  
  return towerArr
}
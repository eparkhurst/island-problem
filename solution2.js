import data from './data.mjs'

const search = () => {
  const map = [...data]
  let lastIsland = 0
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const element = map[y][x]
      if (element === 'x') {
        lastIsland++
        map[y][x] = lastIsland
        checkSurroundings(y, x, map, lastIsland)
      }
    }
  }
  console.log(lastIsland)
  console.log(map.map((row) => console.log(row.join(''))))
}

const checkSurroundings = (y, x, map, num) => {
  for (let i = y - 1; i <= y + 1; i++) {
    for (let j = x - 1; j <= x + 1; j++) {
      const element = map[i]?.[j]
      if (element === 'x') {
        map[i][j] = num
        checkSurroundings(i, j, map, num)
      }
    }
  }
  return false
}

search()

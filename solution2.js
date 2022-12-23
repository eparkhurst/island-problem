import data from './data.mjs'

// This is my second pas at the problem and I like it a lot more
// It follows the same principal of converting Xs to numbers but does
// it in a more efficent way.
// Once an X is found it recursively converts the whole island to that number
// Because there aren't mistakes to clean up, I can trust that the 
// lastIsland number is the total islands found

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
  return lastIsland
}

// this recursively finds all of the land postions and marks 
// them with a number.
// It looks at ever position around the starting position.
// if it finds an X, it marks it with numb and 
// calls itself with the next position as the starter
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

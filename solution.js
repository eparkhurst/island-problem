import map from './data.mjs'

const search = () => {
  let lastIsland = 0
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const element = map[y][x]
      if (element === 'x') {
        const neighbor = checkSurroundings(y, x, map)
        if (neighbor) {
          map[y][x] = neighbor
        } else {
          console.log(y, x)
          lastIsland++
          map[y][x] = lastIsland
        }
      }
    }
  }
  consolidate(map)
  // console.log(map.map((row) => console.log(row.join(''))))
}

const checkSurroundings = (y, x, map) => {
  if (y === 1 && x === 4) {
    console.log(map[y]?.[x + 1])
  }
  if (typeof map[y - 1]?.[x - 1] === 'number') return map[y - 1][x - 1]
  if (typeof map[y - 1]?.[x] === 'number') return map[y - 1][x]
  if (typeof map[y - 1]?.[x + 1] === 'number') return map[y - 1][x + 1]

  if (typeof map[y]?.[x + 1] === 'number') {
    console.log('this should hit')
    return map[y][x + 1]
  }
  if (typeof map[y]?.[x - 1] === 'number') return map[y][x - 1]

  if (typeof map[y + 1]?.[x - 1] === 'number') return map[y + 1][x - 1]
  if (typeof map[y + 1]?.[x] === 'number') return map[y + 1][x]
  if (typeof map[y + 1]?.[x + 1] === 'number') return map[y + 1][x + 1]
  return false
}

const consolidate = (map) => {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const element = map[y][x]
      if (typeof element === 'number') {
        const neighbor = checkSurroundings(y, x, map)
        if (neighbor !== element) {
          map[y][x] = Math.min(neighbor, element)
        }
      }
    }
  }
  console.log(map.map((row) => console.log(row.join(''))))
  const dict = {}
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      const element = map[y][x]
      if (typeof element === 'number') {
        dict[element] = true
      }
    }
  }
  console.log(Object.keys(dict).length)
}

search()

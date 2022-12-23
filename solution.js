import map from './data.mjs'
// This solution was my first run through. It is not very efficent
// but shows the steps I went thgouh to get an answer
// 1. loop through everything eg search()
// 2. check the postions around at each postion
// 3. convert Xs to numbers for checking
// 4. didn't work so add consolidation function



// the search function pretty much goes through each position
// if an element is an x it checks it's neighbors to see if any are a number
// if yes, it becomes that number, if no, it gets the next 'lastIslan' number
// this mostly worked but created situations where an x that was part of a large island
// might get a new number whe a previously found position was more than one away
// the consolidate function then cleans it up
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

// checkSurroundings is given a postion and checks all the places around
// than postion on the map for a number
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

// go through a map that has land converted to numbers
// it then makes the numbers match
// and island of 0032220 becomes 0022220
// it loops on more time to create a dictionary of the numbers and get a final count
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

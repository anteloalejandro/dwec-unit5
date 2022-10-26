function array_to_map( array ) {
  let map = new Map()
  for (const word of array) {
    // If the word doesn't exist, set its value to one.
    // If it exists, add 1 to its current value.
    map.set(word, map.has(word) ? map.get(word)+1 : 1)
  }
  return map
}

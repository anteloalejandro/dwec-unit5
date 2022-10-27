function isAnagram(str1, str2, ...spread) {
  str1 = String(str1)
  str2 = String(str2)
  // Add all the arguments to an array.
  let arr = []
  arr = arr.concat([str1, str2].concat(spread))

  let anagram = true
  for (let i = 0; i < arr.length; i++) {
    // Transform all characters into lowercase ones.
    arr[i] = arr[i].toLowerCase()
    // Transform the word into an array
    arr[i] = arr[i].split("")
    // Sort the array alphabetically
    arr[i] = arr[i].sort((a,b)=>a.localeCompare(b))
    // Transform the array back into a word.
    arr[i] = arr[i].join("")
  }

  // If there is any different word, it isn't an anagram.
  for (let i = 1; i < arr.length && anagram; i++) {
    if (arr[i] !== arr[i-1]) anagram = false
  }

  return anagram
}

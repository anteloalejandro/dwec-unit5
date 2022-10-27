function filter(array, callback) {
  // Create a new array to store the valid data.
  let out = []
  // Run through the given array
  for (let i = 0; i < array.length; i++) {
    // Use a callback function to check if the value is valid,
    // and store it in the new array if it is.
    if (callback(array[i]))
      out[out.length] = array[i]
  }
  return out
}

function print_arr(array) {
  console.log(array)
  if (array.length == 0) {
    document.write('Empty array')
    return
  }
  let out = ""+array[0]
  for (let i = 1; i < array.length; i++) {
    out += " | "+array[i]
  }
  document.write(out)
}

function game_board(width, height, mines) {
  /**
   * -1 = mine
   * 0 = no adyacent mines
   * 1 or more = number of mines adyacent to the tile
   */

  // Create a multidimensional table with the specified height and width.
  let out = new Array(height)
  for (let i = 0; i < out.length; i++)
    out[i] = new Array(width).fill(0)

  // Randomly place as many mines as necessary.
  for (let i = 0; i < mines; i++) {
    let rand_x
    let rand_y
    do {
      rand_x = parseInt(Math.random()*width)
      rand_y = parseInt(Math.random()*height)
      // Retry if this tile already has a mine.
    } while (out[rand_y][rand_x] == -1)
    out[rand_y][rand_x] = -1
  }

  return out
}

function mines_around(board) {
  // Return false if the argument isn't an array.
  if (!board instanceof Array) return false

  let height = board.length
  let width = board[0].length

  // Run through the board.
  for (let y = 0; y < height; y++) {
    for (let x= 0; x < width; x++) {
      // If this tile is a mine, run through all the adyacent tiles.
      if (board[y][x] > -1) continue

      let before_y = y == 0 ? y : y-1
      let before_x = x == 0 ? x : x-1
      let after_y = y == height-1 ? y : y+1
      let after_x = x == width-1 ? x : x+1

      for (let i = before_y; i <= after_y; i++) {
        for (let j = before_x; j <= after_x; j++) {
          // Increase by one the value of this adyacent tile only if it isn't a mine.
          if (board[i][j] > -1)
            board[i][j]++
        }
      }
    }
  }

  return board
}

function minesweeper(width = 9, height = 9, mines = 16) {
  // Get the full game board.
  let board = mines_around(game_board(width, height, mines))
  // If the board wasn't created succesfully, return false
  if (board === false) return false

  // Styling for the table.
  document.write(
    '<style>'+
    '#minesweeper {border-collapse: collapse; font-family: monospace; text-align: center; font-size: 0.3em}'+
    '#minesweeper td {border: 1px solid black; width: 5em; height: 5em}'+
    '</style>'
  )

  // Special character to print instead of the corresponding number.
  let special_chars = new Map([
    [-1, 'MINE'], [0, '&nbsp;']
  ])

  // Create table
  let table = "<table id='minesweeper' style='margin: auto'>"
  for (let y = 0; y < height; y++) {
    table += "<tr>"
    for (let x = 0; x < width; x++) {
      let char = board[y][x]
      if (special_chars.has(char))
        char = special_chars.get(char)
      table += `<td>${char}</td>`
    }
    table += "</tr>"
  }
  table += "</table>"

  // Draw table and return true.
  document.write(table)
  return true
}

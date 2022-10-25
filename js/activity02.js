function table(rows = 10, cols = 4, color = 'black') {
  // style string for the table
  let style = `margin: 5px 0px; border-collapse: collapse; border: 3px solid ${color}; width: 100%`
  // style string for the cells
  let cell_style = `border: 1px solid ${color}`
  // Create a string with an empty html table
  let str = `<table style="${style}">`
  for (let i = 0; i < rows; i++) {
    str+="<tr>"
    for (let j = 0; j < cols; j++) {
      str+=`<td style="${cell_style}">&nbsp;</td>`
    }
    str+="</tr>"
  }
  str+= "</table>"
  document.write(str)
}

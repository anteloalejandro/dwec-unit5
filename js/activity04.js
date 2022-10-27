const setWords = new Set();
var arrayWords = [];
// Ask the user for words and add them to a Set.
var word = prompt("Write a word, or leave it empty if you want to finish");
while (word != null && word != "") {
  setWords.add(word);
  word = prompt("Write a word, or leave it empty if you want to finish");
}
// Use the spread operator to dump the values of the set into an array.
arrayWords = [...setWords];
/*
Uses a callback function with a localeCompare() function nested inside it
sort() to sort the array using a reversed spanish alphabetical order.

'a.localeCompare(b)' returns a positive number to denote that 'a' is greater than 'b',
returns a negative number to denote the opposite, and returns a 0 if they are equal.
Then, sort() orders entries using these returning values from lesser to greater,
but the '-' operand is used, so the orders are reversed.
*/
arrayWords.sort((a, b) => (-a.localeCompare(b, "es")));
// forEach calls this annonymous function for each element in the array.
// The function writes a new paragraph in the document for each element.
arrayWords.forEach(function (w) {
  document.write(`<p>${w}</p>`);
})

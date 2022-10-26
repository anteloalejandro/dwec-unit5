const setWords = new Set();
var arrayWords = [];
// Ask the user for words and add them to a Set
var word = prompt("Write a word, or leave it empty if you want to finish");
while (word != null && word != "") {
  setWords.add(word);
  word = prompt("Write a word, or leave it empty if you want to finish");
}
// Use the spread operator to dump the values of the set into an array
arrayWords = [...setWords];
// Use a callback function in sort() to sort the array using the spanish alphabetical order instead of the Unicode Character Table
arrayWords.sort((a, b) => (-a.localeCompare(b, "es")));
// forEach calls this annonymous function for each element in the array
// The function writes a new paragraph in the document for each element
arrayWords.forEach(function (w) {
  document.write(`<p>${w}</p>`);
})

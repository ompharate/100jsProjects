// longest word in a string
function longestWord(text) {
  if (!text) return false;
  let formattedString = text.trim();

  let finalLongestSize = 0;
  let finalLongestWord = "";

  let TempLongestSize = 0;
  let TempLongestWord = "";

  for (let i = 0; i < formattedString.length; i++) {
    if (formattedString[i] != " ") {
      TempLongestSize++;
      TempLongestWord += formattedString[i];
      continue;
    }

    if (TempLongestSize > finalLongestSize) {
      finalLongestSize = TempLongestSize;
      finalLongestWord = TempLongestWord;
    }
    TempLongestSize = 0;
    TempLongestWord = "";
  }

  console.log(finalLongestSize);
  console.log(finalLongestWord);
}

longestWord(
  "hii this is the longest worddfggdfg in the text what what are you doing here"
);

function calcWordFrequencies() {
    const words = prompt('Enter a list of words (separated by spaces):');
    const wordArray = words.split(' ');
  
    const wordMap = new Map();
  
    // Count the frequency of each word
    for (let i = 0; i < wordArray.length; i++) {
      const word = wordArray[i];
      if (wordMap.has(word)) {
        wordMap.set(word, wordMap.get(word) + 1);
      } else {
        wordMap.set(word, 1);
      }
    }
  
    // Output the words and their frequencies
    for (let [word, frequency] of wordMap) {
      console.log(word, frequency);
    }
  }
  
  // Call calcWordFrequencies()
  calcWordFrequencies();
  
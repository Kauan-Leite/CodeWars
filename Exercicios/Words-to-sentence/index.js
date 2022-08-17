function wordsToSentence(words) {
  let finalPhrase = '';
  for (let index = 0; index < words.length; index += 1) {
    if (words[index + 1] !== undefined) {
      finalPhrase += `${words[index]} `;
    } else {
      finalPhrase += `${words[index]}`;
    }
  }
  return finalPhrase;
}

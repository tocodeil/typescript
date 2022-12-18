export function countDifferentWords(sentence: string) {
  const words: Record<string, number> = {};

  sentence.split(' ').forEach(w => words[w] = 1);

  return Object.keys(words);
}

console.log(countDifferentWords("one two three four one"));

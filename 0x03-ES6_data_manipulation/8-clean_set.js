export default function cleanSet(newSet, startString) {
  const newString = [];
  const len = startString.length;

  if (
    typeof newSet !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const word of newSet) {
    // check if word starts with startString
    if (word && word.startsWith(startString)) {
      newString.push(word.slice(len));
    }
  }

  return newString.join('-');
}

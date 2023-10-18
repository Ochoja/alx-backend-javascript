export default function cleanSet(newSet, startString) {
  let newString = '';
  const len = startString.length;

  newSet.forEach((word) => {
    // check if word starts with startString
    if (word.startsWith(startString) && startString != '') {
      newString = newString.concat(word.slice(len), '-'); //concatenate string to newString
    }
  });

  return newString.slice(0, newString.length - 1);
}

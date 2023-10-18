export default function cleanSet(newSet, startString) {
  let newString = '';
  const newArray = [];
  const len = startString.length;

  newSet.forEach((word) => {
    // check if word starts with startString
    if (word.startsWith(startString) && startString != '') {
      newArray.push(word.slice(len));
      //   newString = newString.concat(word.slice(len), '-');
    }
  });

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] != '') {
      newString = newString.concat(newArray[i], '-');
    }
  }

  return newString.slice(0, newString.length - 1);
}

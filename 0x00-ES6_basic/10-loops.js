export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (let idx of array) {
    idx = appendString + idx;
    array[index] = idx;
    index += 1;
  }

  return array;
}

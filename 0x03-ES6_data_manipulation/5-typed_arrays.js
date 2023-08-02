function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const bufferView = new Int8Array(buffer);

  if (position >= length) {
    throw new Error('Position outside range');
  } else bufferView[position] = value;
  return buffer;
}

export default createInt8TypedArray;

// const buffer = new ArrayBuffer(16);
// const typedArray = new Int8Array(buffer)
// typedArray[0] = 25;
// console.log(typedArray)
// console.log(buffer)

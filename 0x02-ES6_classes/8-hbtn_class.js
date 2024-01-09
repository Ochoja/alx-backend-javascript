export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Modify the print value when object is invoked
  // with Number and String eg Number(instance), String(instance)
  [Symbol.toPrimitive](val) {
    if (val === 'number') return this._size;
    if (val === 'string') return this._location;
  }
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name != String) {
      throw new Error("TypeError: Name must be a string");
    } else this._name = name;

    if (typeof length != Number) {
      throw new Error("TypeError: Length must be a number");
    } else this._length = length;

    if (typeof students != Array) {
      throw new Error("TypeError: Students must be an array");
    } else this._students = students;
  }

  // getter methods
  get name() {
    return this._name;
  }

  // setter methods
  set name(newName) {
    if (typeof newName != String) {
      throw new Error("TypeError: Name must be a string");
    } else this._name = newName;
  }

  // getter methods
  get length() {
    return this._name;
  }

  // setter methods
  set length(newLength) {
    if (typeof newLength != Number) {
      throw new Error("TypeError: Length must be a number");
    } else this._name = newLength;
  }

  get students() {
    return this._name;
  }

  // setter methods
  set students(newStudents) {
    if (typeof newStudents != Array) {
      throw new Error("TypeError: Students must be a array");
    } else this.students = newStudents;
  }
}

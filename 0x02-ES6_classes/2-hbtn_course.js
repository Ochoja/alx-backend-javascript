export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter methods
  get name() {
    return this._name;
  }

  // setter methods
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = newName;
  }

  // getter methods
  get length() {
    return this._name;
  }

  // setter methods
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = newLength;
  }

  get students() {
    return this._name;
  }

  // setter methods
  set students(newStudents) {
    if (!newStudents.isArray()) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (const element of newStudents) {
        if (typeof element !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = newStudents;
    }
  }
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = length;

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (const element of students) {
        if (typeof element !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    }
  }

  // getter methods
  get name() {
    return this._name;
  }

  // setter method
  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = name;
  }

  // getter methods
  get length() {
    return this._name;
  }

  // setter methods
  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = length;
  }

  get students() {
    return this._name;
  }

  // setter methods
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array of strings');
    } else {
      for (const element of students) {
        if (typeof element !== 'string') {
          throw new TypeError('Students must be an array of strings');
        }
      }
      this._students = students;
    }
  }
}

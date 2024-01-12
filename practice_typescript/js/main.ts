// Primitives
let a: number = 5;
let b: any = 8;
b = 'String';

// Unions
let pid: number | string;

// arrays & tuples
// arrays
let arr1: number[] = [2, 4, 6, 8];
let arr2: any[] = [2, 3, 4];
let arr3: undefined[] = [undefined, undefined];

// tuples
let arr4: [string, number] = ['Jason', 54];
let arr5: [string, number] = ['Smith', 22];

// arbitrary number of elements
let arr6: [string, ...number[]] = ['name'];

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

// Objects, types and Interfaces
type User = {
  id: number;
  name: string;
  print: () => number;
};

const user: User = {
  id: 1,
  name: 'John',

  print() {
    return this.id;
  },
};

"use strict";
// Primitives
let a = 5;
let b = 8;
b = 'String';
// Unions
let pid;
// arrays & tuples
// arrays
let arr1 = [2, 4, 6, 8];
let arr2 = [2, 3, 4];
let arr3 = [undefined, undefined];
// tuples
let arr4 = ['Jason', 54];
let arr5 = ['Smith', 22];
// arbitrary number of elements
let arr6 = ['name'];
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'John',
    print() {
        return this.id;
    },
};

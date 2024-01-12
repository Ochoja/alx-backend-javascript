interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Jake',
  lastName: 'Johnson',
  age: 22,
  location: 'Columbia',
};

const student2: Student = {
  firstName: 'Juliet',
  lastName: 'Frank',
  age: 21,
  location: 'Peru',
};

const studentsList: Student[] = [student1, student2];

let body = document.body;
let table = document.createElement('table');
let table_head = document.createElement('thead');
let table_row = document.createElement('tr');

// Define Table Head
for (let key in studentsList[0]) {
  let th = document.createElement('th');
  let text = document.createTextNode(key);
  th.appendChild(text);
  table_row.appendChild(th);
}

table_head.appendChild(table_row);
table.appendChild(table_head);
table.setAttribute('border', '2');
body.appendChild(table);

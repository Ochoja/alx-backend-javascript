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
let table_body = document.createElement('tbody');
let thead_row = document.createElement('tr');

/*Table head definition */
for (let key in studentsList[0]) {
  let th = document.createElement('th');
  let text = document.createTextNode(key);
  th.appendChild(text);
  thead_row.appendChild(th);
}

// Add table head to table
table_head.appendChild(thead_row);
table.appendChild(table_head);
/* End table head definition*/

/* Table body definition */
for (let student of studentsList) {
  let tr = document.createElement('tr'); // create row for each student

  // loop through student data and add to row
  for (const [key, value] of Object.entries(student)) {
    const text = document.createTextNode(value);
    let td = document.createElement('td');
    td.appendChild(text);
    tr.appendChild(td);
  }

  // add row to table
  table_body.appendChild(tr);
}
/* End table body definition */

// Add table to document
table.setAttribute('border', '2'); // set value of table border to 2
table.appendChild(table_body);
body.appendChild(table);
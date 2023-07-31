function getStudentsByLocation(students, city) {
  return students.filter((item) => item.city === city);
}

export default getStudentsByLocation;

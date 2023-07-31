function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    return students.filter((item) => item.city === city);
  } return [];
}

export default getStudentsByLocation;

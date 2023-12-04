export default function getStudentsByLocation(getListStudents, city) {
  const array = getListStudents.filter((student) => student.location === city);
  return array;
}

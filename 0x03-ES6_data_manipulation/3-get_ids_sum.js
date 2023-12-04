export default function getStudentIdsSum(getListStudents) {
  const reduce = getListStudents.reduce((acc, curr) => acc + curr.id, 0);
  return reduce;
}

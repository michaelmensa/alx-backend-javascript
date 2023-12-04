export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  const newlist = getListStudents.filter((student) => student.location === city);

  return newlist.map((student) => {
    const [newGrade] = newGrades.filter((grade) => grade.studentId === student.id);

    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}

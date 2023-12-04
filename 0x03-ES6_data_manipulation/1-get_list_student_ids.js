export default function getListStudentIds(Params) {
  if (Array.isArray(Params)) {
    const array = Params.map((obj) => obj.id);
    return array;
  }
  return [];
}

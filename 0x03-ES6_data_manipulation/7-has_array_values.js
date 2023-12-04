export default function hasValuesFromArray(set, array) {
  const arr = new Set(array);
  const elements = [...arr].every((element) => set.has(element));
  return elements;
}

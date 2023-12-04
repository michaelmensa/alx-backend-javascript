export default function cleanSet(set, startString) {
  return Array(...set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length)).join('-');
}

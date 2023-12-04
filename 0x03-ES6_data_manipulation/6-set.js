export default function setFromArray(array) {
  if (!Array.isArray(array)) { throw new TypeError('Must be an array'); }
  return new Set(array);
}

export default function divideFunction(numerator, denominator) {
  if (Number.isNaN(numerator) || Number.isNaN(denominator)) {
    throw new Error('Parameter is not a number');
  }
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}

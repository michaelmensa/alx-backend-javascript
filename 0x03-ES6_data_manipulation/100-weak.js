export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let queryCount = weakMap.get(endpoint);

  weakMap.set(endpoint, queryCount ? queryCount += 1 : 1);

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

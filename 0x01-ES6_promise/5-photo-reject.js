export default function uploadPhoto(filename) {
  if (typeof filename !== 'string') return Promise.resolve({});
  const error = new Error(`${filename} cannot be processed`);
  return Promise.reject(error);
}

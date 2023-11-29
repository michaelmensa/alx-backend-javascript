export default function signUpUser(firstName, lastName) {
  const p1 = {
    firstName,
    lastName,
  };
  const p2 = new Promise((resolve) => {
    resolve(p1);
  });
  return p2;
}

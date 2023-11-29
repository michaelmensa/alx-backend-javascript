import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  const promises = [p1, p2];

  return Promise.allSettled(promises).then((results) => {
    const finalresult = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        finalresult.push(result);
      } else {
        finalresult.push({
          status: result.status,
          value: `Error: ${result.reason.message}`,
        });
      }
    });
    return finalresult;
  });
}

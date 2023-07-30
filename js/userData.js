// User Data
// This will collected via a form which I'll add after testing the algorithm.
let userData = {
  name: 'Fake Username',
  email: 'email@email.com',
  phone: '123-456-789',
  currentSalary: 25000,
  outdoorsPreference: 1,
  technologyPreference: 3,
  handsOnPreference: 1,
};

function convertUserScore(filterPreference) {
  let convertedScore = ((filterPreference - 1) / 4) * 2 - 1;
  return convertedScore;
}

userData.outdoorsExtent = convertUserScore(userData.outdoorsPreference);
userData.technologyExtent = convertUserScore(userData.technologyPreference);
userData.handsOnExtent = convertUserScore(userData.handsOnPreference);

console.log(userData);

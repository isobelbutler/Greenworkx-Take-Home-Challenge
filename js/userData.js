const form = document.getElementById('contact-form');

form.addEventListener('submit', collectUserData);

// Function to convert user preference scale of 1 - 5 to a rating scale of -1 to 1
function convertUserScore(filterPreference) {
  return ((filterPreference - 1) / 4) * 2 - 1;
}

// Function to collect user data from a form
function collectUserData(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const userData = {};
  formData.forEach((value, key) => (userData[key] = value));
  console.log(userData);

  processUserPreferences(userData);
  showResults(userData, 3);
}

function showResults(userData, numMatches) {
  let rankedMatches = getTopMatches(jobData, userData, numMatches);
  let resultsHTML = generateHTMLResults(rankedMatches);

  resultsContainer.innerHTML = resultsHTML;
}

// Function to process user preferences and add extent scores to userData
function processUserPreferences(userData) {
  userData.outdoorsExtent = convertUserScore(userData.outdoorsPreference);
  userData.technologyExtent = convertUserScore(userData.technologyPreference);
  userData.handsOnExtent = convertUserScore(userData.handsOnPreference);
}

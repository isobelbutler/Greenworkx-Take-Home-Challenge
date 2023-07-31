import { showResults } from './resultsRendering.js';

// Function to convert user preference scale of 1 - 5 to a rating scale of -1 to 1
function convertUserScore(filterPreference) {
  console.log('convertUserScore function is called');
  // Convert the user preference to a scale of -1 to 1
  return ((filterPreference - 1) / 4) * 2 - 1;
}

// Function to collect user data from a form
function collectUserData(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  const formData = new FormData(event.target); // Get form data using the 'FormData' API
  const userData = {}; // Create an empty object to store user data
  // Iterate through form data and populate the 'userData' object
  formData.forEach((value, key) => (userData[key] = value));
  console.log('User data is added to the userData object');
  processUserPreferences(userData); // Process user preferences and add extent scores to 'userData'
  showResults(userData, 3); // Show the top three job matches based on user data
}

// Function to process user preferences and add extent scores to 'userData'
function processUserPreferences(userData) {
  // Convert user preference scores to a scale of -1 to 1 and add them to 'userData'
  userData.outdoorsExtent = convertUserScore(userData.outdoorsPreference);
  userData.technologyExtent = convertUserScore(userData.technologyPreference);
  userData.handsOnExtent = convertUserScore(userData.handsOnPreference);
  console.log(
    'All scores have been converted to a -1 to 1 scale and added to the userData object'
  );
}

// Export functions to be used in other files
export { convertUserScore, processUserPreferences, collectUserData };

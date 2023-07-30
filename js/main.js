// User Data Variables
// let userOutdoorsScore = userData.convertedOutdoorsPreference;
// let userTechnologyScore = userData.convertedTechnologyPreference;
// let userHandsOnScore = userData.convertedHandsOnPreference;
let resultsContainer = document.getElementById('results-container');

// Top Matches Variable
let userJobMatches = [];

// Create loop
for (let i = 0; i < jobData.length; i++) {
  // Job Data Variables
  let jobName = jobData[i].name;
  let jobOutdoorsExtent = jobData[i].outdoorsExtent;
  let jobTechnologyExtent = jobData[i].technologyExtent;
  let jobHandsOnExtent = jobData[i].handsOnExtent;

  // Access user object properties
  let userOutdoorsScore = userData[`outdoorsExtent`];
  let userTechnologyScore = userData[`technologyExtent`];
  let userHandsOnScore = userData[`handsOnExtent`];

  let totalMatchScore = 0;

  // Compare Scores
  totalMatchScore += Math.abs(userOutdoorsScore - jobOutdoorsExtent);
  totalMatchScore += Math.abs(userTechnologyScore - jobTechnologyExtent);
  totalMatchScore += Math.abs(userHandsOnScore - jobHandsOnExtent);

  // Add the job and the totalMatchScore to userJobMatches object
  userJobMatches.push({ jobName, totalMatchScore });
}

console.log(userJobMatches);

const rankedMatches = userJobMatches
  .sort((a, b) => a.totalMatchScore - b.totalMatchScore)
  .slice(0, 3);

console.log(rankedMatches);
let resultsHTML = '';

function addHTMLResults() {
  for (let i = 0; i < rankedMatches.length; i++) {
    resultsHTML += `<p>${i + 1}. ${rankedMatches[i].jobName}</p>`;
  }
}
addHTMLResults();

resultsContainer.innerHTML = resultsHTML;

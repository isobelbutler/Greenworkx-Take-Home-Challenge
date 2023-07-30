// User Data Variables
// let userOutdoorsScore = userData.convertedOutdoorsPreference;
// let userTechnologyScore = userData.convertedTechnologyPreference;
// let userHandsOnScore = userData.convertedHandsOnPreference;

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
  totalMatchScore += userOutdoorsScore - jobOutdoorsExtent;
  totalMatchScore += userTechnologyScore - jobTechnologyExtent;
  totalMatchScore += userHandsOnScore - jobHandsOnExtent;
  totalMatchScore = Math.abs(totalMatchScore);

  // Add the job and the totalMatchScore to userJobMatches object
  userJobMatches.push({ jobName, totalMatchScore });
}

console.log(userJobMatches);

const rankedMatches = userJobMatches.sort(
  (a, b) => a.totalMatchScore - b.totalMatchScore
);

console.log(rankedMatches.slice(0, 3));

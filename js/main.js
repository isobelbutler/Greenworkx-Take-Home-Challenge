// Job Data Variables
let jobName = jobData[i].name;
let jobOutdoorsExtent = jobData[i].outdoorsExtent;
let jobTechnologyExtent = jobData[i].technologyExtent;
let jobHandsOnExtent = jobData[i].handsOnExtent;

// User Data Variables
let userOutdoorsPreference = userData.outdoorsPreference;
let userTechnologyPreference = userData.technologyPreference;
let userHandsOnPreference = userData.handsOnPreference;

// Top Matches Variable
let userJobMatches = [];

function compareScores(jobFilterExtent, userFilterPreference) {
  let totalMatchScore = 0;
  if (jobFilterExtent === userFilterPreference) {
    totalMatchScore++;
  }
}

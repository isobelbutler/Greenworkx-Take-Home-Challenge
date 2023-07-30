// Function to compare scores for a job
function compareScores(job, user) {
  let totalMatchScore = 0;
  totalMatchScore += Math.abs(user.outdoorsExtent - job.outdoorsExtent);
  totalMatchScore += Math.abs(user.technologyExtent - job.technologyExtent);
  totalMatchScore += Math.abs(user.handsOnExtent - job.handsOnExtent);
  return totalMatchScore;
}

// Function to get top matches
function getTopMatches(jobData, userData, numMatches) {
  let userJobMatches = [];
  for (let i = 0; i < jobData.length; i++) {
    let jobName = jobData[i].name;
    let totalMatchScore = compareScores(jobData[i], userData);
    userJobMatches.push({ jobName, totalMatchScore });
  }
  return userJobMatches
    .sort((a, b) => a.totalMatchScore - b.totalMatchScore)
    .slice(0, numMatches);
}

// Function to generate HTML results
function generateHTMLResults(matches) {
  let resultsHTML = '';
  for (let i = 0; i < matches.length; i++) {
    resultsHTML += `<p>${i + 1}. ${matches[i].jobName}</p>`;
  }
  return resultsHTML;
}

// Variables
let resultsContainer = document.getElementById('results-container');
let rankedMatches = getTopMatches(jobData, userData, 3);
let resultsHTML = generateHTMLResults(rankedMatches);

resultsContainer.innerHTML = resultsHTML;

// // User Data Variables
// let resultsContainer = document.getElementById('results-container');

// // Top Matches Variable
// let userJobMatches = [];

// // Create loop which compares user preferences against each job in the jobData object
// for (let i = 0; i < jobData.length; i++) {
//   // Job Data Variables
//   let jobName = jobData[i].name;
//   let jobOutdoorsExtent = jobData[i].outdoorsExtent;
//   let jobTechnologyExtent = jobData[i].technologyExtent;
//   let jobHandsOnExtent = jobData[i].handsOnExtent;

//   // Access user object properties
//   let userOutdoorsScore = userData[`outdoorsExtent`];
//   let userTechnologyScore = userData[`technologyExtent`];
//   let userHandsOnScore = userData[`handsOnExtent`];

//   let totalMatchScore = 0;

//   // Compare Scores
//   // Important: Math.abs makes sure that the difference between the user and job rating is always positive.
//   // If it's not positive then the algorithm will not work.
//   totalMatchScore += Math.abs(userOutdoorsScore - jobOutdoorsExtent);
//   totalMatchScore += Math.abs(userTechnologyScore - jobTechnologyExtent);
//   totalMatchScore += Math.abs(userHandsOnScore - jobHandsOnExtent);

//   // Add the job and the totalMatchScore to userJobMatches object
//   userJobMatches.push({ jobName, totalMatchScore });
// }

// console.log(userJobMatches);

// const rankedMatches = userJobMatches
//   .sort((a, b) => a.totalMatchScore - b.totalMatchScore)
//   .slice(0, 3);

// console.log(rankedMatches);
// let resultsHTML = '';

// function addHTMLResults() {
//   for (let i = 0; i < rankedMatches.length; i++) {
//     resultsHTML += `<p>${i + 1}. ${rankedMatches[i].jobName}</p>`;
//   }
// }
// addHTMLResults();

// resultsContainer.innerHTML = resultsHTML;

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

// User Data Variables
let resultsContainer = document.getElementById('results-container');

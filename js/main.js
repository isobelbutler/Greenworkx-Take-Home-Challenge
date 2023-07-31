// Function to compare scores between user working condition preferences and job working condition extent
function compareScores(job, user) {
  let totalMatchScore = 0;
  // Calculate the total match score by comparing the extent scores between 'job' and 'user'
  totalMatchScore += Math.abs(user.outdoorsExtent - job.outdoorsExtent);
  totalMatchScore += Math.abs(user.technologyExtent - job.technologyExtent);
  totalMatchScore += Math.abs(user.handsOnExtent - job.handsOnExtent);
  console.log('The score for determining job match score is calculated');
  return totalMatchScore; // Return the calculated total match score
}

// Function to get top matches
function getTopMatches(jobData, userData, numMatches) {
  let userJobMatches = [];
  // Iterate through the 'jobData' array and calculate the match score for each job
  for (let i = 0; i < jobData.length; i++) {
    let jobName = jobData[i].name;
    let totalMatchScore = compareScores(jobData[i], userData);
    // Store the job name and its total match score in the 'userJobMatches' array
    userJobMatches.push({ jobName, totalMatchScore });
    console.log(`${jobName} is added to the userJobMatches array`);
  }
  console.log('Job matches are sorted and refined to a set number of matches');
  // Sort the 'userJobMatches' array in ascending order based on total match score and get the top 'numMatches'
  return userJobMatches
    .sort((a, b) => a.totalMatchScore - b.totalMatchScore)
    .slice(0, numMatches);
}

// Function to generate HTML results
function generateHTMLResults(matches) {
  let resultsHTML = '';
  // Generate HTML for each job match in the 'matches' array
  for (let i = 0; i < matches.length; i++) {
    resultsHTML += `<p>${i + 1}. ${matches[i].jobName}</p>`;
    console.log(
      `Job number ${i + 1} aka ${
        matches[i].jobName
      } is ready to be rendered in the DOM`
    );
  }
  return resultsHTML; // Return the HTML results
}

// Variable for the container to display the job matches
let resultsContainer = document.getElementById('results-container');

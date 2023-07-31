let jobData = [
  {
    name: 'Solar Panel Installer',
    salaryRange: { low: 34000, medium: 40900, high: 62400 },
    outdoorsExtent: 1,
    handsOnExtent: 1,
    technologyExtent: 0.8,
  },
  {
    name: 'Heat Pump Engineer',
    salaryRange: { low: 32500, medium: 35000, high: 43000 },
    outdoorsExtent: 0.8,
    handsOnExtent: 1,
    technologyExtent: 0.8,
  },
  {
    name: 'EV Chargepoint Installer',
    salaryRange: { low: 34000, medium: 35500, high: 40500 },
    outdoorsExtent: 0.8,
    handsOnExtent: 1,
    technologyExtent: 1,
  },
  {
    name: 'Retrofit Assessor',
    salaryRange: { low: 27500, medium: 32500, high: 40500 },
    outdoorsExtent: -1,
    handsOnExtent: -1,
    technologyExtent: 0,
  },
  {
    name: 'Forester',
    salaryRange: { low: 23000, medium: 28400, high: 32500 },
    outdoorsExtent: 1,
    handsOnExtent: 0,
    technologyExtent: -1,
  },
  {
    name: 'Soil Technician',
    salaryRange: { low: 22000, medium: 24000, high: 28500 },
    // trainingRequirement: JobTrainingRequirement.LOW,
    outdoorsExtent: 0.5,
    handsOnExtent: 0.2,
    technologyExtent: 0.5,
  },
  {
    name: 'Water Operative',
    salaryRange: { low: 21900, medium: 23700, high: 31200 },
    outdoorsExtent: 0.2,
    handsOnExtent: 0.2,
    technologyExtent: 0.5,
  },
];

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

// Export functions to be used in other files
export { jobData, compareScores, getTopMatches };

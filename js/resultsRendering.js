import { getTopMatches, jobData } from './jobMatching.js';
import { resultsContainer } from './main.js';

// Function to display the results of top job matches
function showResults(userData, numMatches) {
  // Get the top job matches based on 'userData' using the 'getTopMatches' function
  let rankedMatches = getTopMatches(jobData, userData, numMatches);
  // Generate the HTML for displaying the top job matches
  let resultsHTML = generateHTMLResults(rankedMatches);
  resultsContainer.innerHTML = resultsHTML; // Display the results in the 'resultsContainer' element
  console.log('The top three job matches are rendered on the DOM');
  console.log('Success! We found our matches!');
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

// Export functions to be used in other files
export { generateHTMLResults, showResults };

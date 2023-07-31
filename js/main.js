// Import functions from different files
import { collectUserData, processUserPreferences } from './userPreferences.js';
import { compareScores, getTopMatches } from './jobMatching.js';
import { generateHTMLResults, showResults } from './resultsRendering.js';

// Get the form element with the ID 'contact-form'
const form = document.getElementById('contact-form');

// Attach an event listener to the form on 'submit' event, calling the 'collectUserData' function
form.addEventListener('submit', collectUserData);

// Variable for the container to display the job matches
export let resultsContainer = document.getElementById('results-container');

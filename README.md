# Matching and Recommendation Algorithm

## Task Outline:

1. Take inputs of the user data which we’ve collected.
2. Output at least three top ‘matches’ of career paths.
3. Each ‘match’ should have some ‘match score’ associated with it.
4. Be responsive to user inputs in some meaningful way.

## Thinking through how I would build the algorithm:

### 1. Take inputs of the collected user data.

Create a form to collect the following data from the user:

- Name
- Contact details (email, phone)
- Interest in working outdoors (1-5)
- Interest in working with technology (1-5)
- Interest in hands-on work (1-5)
- Current salary (Think about whether you create a functionn which converts the user's hourly wage to an annual income, or whether you just ask the user for their annual income originally).

### 2. Collecting and processing the user data.

I wanted to be able to create a direct comparison between the user's interest in a particular aspect of the work and the existing data for each role. My first thought was to convert each user score from a 1 to 5 scale to a -1 to 1 scale so that I could use the Math.sign() method on the role data scores to create a direct comparison:

| User Score | Converted Score |
| ---------- | --------------- |
| 1          | -1              |
| 2          | -1              |
| 3          | 0               |
| 4          | 1               |
| 5          | 1               |

I realised this lessens both the accuracy of the user preference score and the role data so I changed approach. I created a function called convertUserScore (found in userData.js) which converts the user score to an equivalent decimal rating:

| User Score | Converted Score |
| ---------- | --------------- |
| 1          | -1              |
| 2          | -0.5            |
| 3          | 0               |
| 4          | +0.5            |
| 5          | +1              |

### 3. Processing the user data

When the user submits their preferences via the form a series of functions are called. collectUserData() processes the user inputs and adds them to an object called userData.
Then processUserPrefences() is called which calls convertUserScore() on each user score, and adds these converted scores to the userData object.

### 4. The algorithm:

I decided the algorithm would compare the difference between each user score and the role data, and would then sum the differences. The role with the lowest total difference would be the top recommendation for the user, and so on. I did think that maybe it's not neccessary to convert the user data to the same scale as the role data but I do quite like that they're on the same scale, what do you think?

BEGIN
When form is submitted: Process user inputs and add to userData object.

Convert all the user data to the same scale as the role data.

FOR i = numbers of roles

Calculate the difference between user preference and corresponding role data. The difference = match score.

Push {Job name[i]: Match Score} to empty array called userJobMatches.

NEXT i

SORT and SLICE userJobMatches

PRINT userJobMatches

END

## Future improvements to the Algorithm:

#### Add the current salary filter.

Thoughts:

- Should the user input this as an annual or hourly salary? If hourly should I ask for average hours so can calculate semi-accurate annual income?
- Where should this go in the algorithm? Instictively I would hide job matches which had lower mid-range incomes than the user's current income, but not all user's will be prioritising higher salaries. Perhaps this could be a checkbox option - 'Hide job's with lower average salaries?'

#### Have weightings for each working condition.

Thoughts:

- If a particular working condition is more important to the user, somehow factor this into the algorithm.
- Could include a scale if importance for users to select from for each condition.

#### Incoporate collaborative filtering.

- If you collected data about the career that users ended up training in, you could alter the results to show these careers to users who input similar scores.
- Need a fairly sizeable dataset.
- Need time to pass so that data about what careers users end up in can be collected.

#### Ask for user feedback.

- When presenting the user with their matches, ask them to rate the suitability of the matches and provide an optional feedback box to gather additional insights.

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
- Current salary (Convert to annual income or ask for it in annual).

### 2. Convert each 1-5 user score to a -1 to 1 scale.

I originally considered a scale with intervals of 0.5, but thought that converting it to -1, 0, or +1 would mean I could use Math.sign() for comparison and so simplify the algorithm.

| User Score | Converted Score |
| ---------- | --------------- |
| 1          | -1              |
| 2          | -1              |
| 3          | 0               |
| 4          | 1               |
| 5          | 1               |

### 3. If the user's salary is higher than the medium salary of a potential job, then eliminate that job.

Note: Consider the placement of this filter in the process as not all users prioritise larger salaries. Perhaps use this filter if there are over three closely matched results?

### 4. The algorithm (draft):

<!-- Commenting so that indentation is not affected
BEGIN
jobData = Object with data about each job.
userData = Object with data about user's interests.
totalMatchScore = 0
userJobMatches = []
    FOR i = jobData.length
        REPEAT
            user'filter'Preference = userData.'filter'Preference
            job'filter'Score = Math.sign(jobData[i].'filter'Extent)
            IF user'filter'Preference === job'filter'Score THEN
            totalMatchScore++
            END IF
        UNTIL Iterated through all filters
    userJobMatches.push({jobData[i].name : totalMatchScore})
    NEXT i
RETURN the names of the jobs in userJobMatches with the top three highest totalMatchScores.
END
-->

Thoughts - Convert user scores so that they range from -1 to 1. Then see difference between job score and user score and put to MatchScore. Then the closest match will be the lowest number.

## Future improvements to the Algorithm:

- Have weightings for each filter. For example, if an attribute is more important to the user, add 2 to the totalMatch score instead of 1. Alternatively, allow users to select a scale of importance for each attribute, and then multiply the 'add 1 to totalMatch' by that level of importance.
- When the algorithm becomes larger and more complex, consider using collaborative filtering to improve matching accuracy.
- When presenting the user with their matches, ask them to rate the suitability of the matches and provide an optional feedback box to gather additional insights.

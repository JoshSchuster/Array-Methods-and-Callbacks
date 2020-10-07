import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data */

const filterWorldCupFinal = fifaData.filter((item) => (item.Year === 2014 && item.Stage === "Final"));

// (a) Home Team name for 2014 world cup final 

console.log(filterWorldCupFinal[0]["Home Team Name"]);

// (b) Away Team name for 2014 world cup final

console.log(filterWorldCupFinal[0]["Away Team Name"]);

// (c) Home Team goals for 2014 world cup final

console.log(filterWorldCupFinal[0]["Home Team Goals"]);

// (d) Away Team goals for 2014 world cup final

console.log(filterWorldCupFinal[0]["Away Team Goals"]);

// (e) Winner of 2014 world cup final

console.log(filterWorldCupFinal[0]["Win conditions"]);



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    const finalsData = fifaData.filter((item) => item.Stage === "Final");
    return finalsData; 
};

console.log(getFinals(fifaData)); //test

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {

    const years = callback(fifaData).map((dataArray) => {
        return {'Year' : dataArray.Year};
    });
    return years;
};

console.log(getYears(getFinals)); //test

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const winners = [];
    const getFinals = callback(fifaData);

    getFinals.forEach(element => {
        if(element["Home Team Goals"] > element["Away Team Goals"]){ //Home Team won
            winners.push({'Year': element.Year, 'Winner': element["Home Team Name"]});
        }else{ //Away Team won
            winners.push({'Year': element.Year, 'Winner': element["Away Team Name"]});
        }
    });
    return winners;
};

console.log(getWinners(getFinals)); //test

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {

    let returnString = "";
    const winners = getWinners(getFinals);
    const years = getYears(getFinals);
    
   for(let i = 0; i < years.length; i++){
       returnString += `In ${years[i].Year}, ${winners[i].Winner} won the world cup! \n`;
   }
   return returnString;
};

console.log(getWinnersByYear(getWinners, getYears)); //test

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const homeTeamScoreTotal = data.reduce((total, goals) => {
        return total += goals["Home Team Goals"];
    }, 0);
    const awayTeamScoreTotal = data.reduce((total, goals) => {
        return total += goals["Away Team Goals"];
    }, 0);
    
    const homeTeamAverage = homeTeamScoreTotal/data.length;
    const awayTeamAverage = awayTeamScoreTotal/data.length;

    return {"Average Home Team Goals": homeTeamAverage,
            "Average Away Team Goals": awayTeamAverage
            }
};

console.log(getAverageGoals(getFinals(fifaData))); //test

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

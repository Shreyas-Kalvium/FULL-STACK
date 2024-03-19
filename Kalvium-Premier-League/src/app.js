//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
  return[managerName, managerAge, currentTeam, trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(formation){
  const[defender, midfield, forward] = formation;
  return [defender, midfield, forward];
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year, players){
  return players.filter(player => player.debutYear === year);
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position, players){
  return players.filter(player => player.position === position);
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName, players){
  return players.filter(player => player.award.includes(awardName));
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName, noOfTimes, players){
  return players.filter(player => player.awards.filter(award => award === awardName).length === noOfTimes);
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName, country, players){
  return players.filter(player => player.country === country && player.awards.includes(awardName)); 
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByAwardxTeamxAge(noOfAwards, team, age, players){
  return players.filter(player => player.team === team && player.age < age && player.awards.length >= noOfAwards); 
}

//Progression 9 - Sort players in descending order of their age
function sortByAge(players){
  return players.sort((a,b) => b.age - a.age); 
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won
function filterByTeamxSortByNoOfAwards(team ,players){
  const teamPlayers = players.filter(player => player.team === team);
  return teamPlayers.sort((a,b) => b.awards.length - a.awards.length);
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function sortByNamexAwardxTimes(awardName, noOfTimes, country, players){
  const filteredPlayers = players.filter(player => player.country === country && player.awards.filter(award => award === awardName).length === noOfTimes);
  return filteredPlayers.sort((a,b) => a.namelocaleCompare(b.name));
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function sortByNamexOlderThan(age, players){
  const olderPlayers = player.filter(player => player.age > age);
  return olderPlayers.sort((a,b) => b.awardsYear - a.awardsYear);
}
const strikeButton = document.getElementById("strike");
const resetButton = document.getElementById("reset");

const $team1Score = document.getElementById("score-team1");
const $team1Wicket = document.getElementById("wickets-team1");

const $team2Score = document.getElementById("score-team2");
const $team2Wicket = document.getElementById("wickets-team2");

var team1Score = 0 , team1Wicket = 0, team2Score = 0 ,  team2Wicket = 0 , team1Balls = 0 , team2Balls = 0 , playerTurn = 1;

const possibleOutcomes = [0, 1, 2, 3, 4, 6, "W"];

function gameOver() {
  if (team1Score > team2Score) alert("IND wins the game ");
  if (team2Score > team1Score) alert("PAK wins the game ");
  if (team2Score === team1Score) alert("Play again!");
}

function updateScore() {
  $team1Score.textContent = team1Score;
  $team1Wicket.textContent = team1Wicket;
  $team2Score.textContent = team2Score;
  $team2Wicket.textContent = team2Wicket;
}

resetButton.onclick = () => {
  window.location.reload();
};

strikeButton.onclick = () => {

  const randomRuns =possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

  if (playerTurn === 2) 
  {
    team2Balls++;
    document.querySelector(`#team2-superover div:nth-child(${team2Balls})`).textContent = randomRuns;
    if (randomRuns === "W") 
    {
      team2Wicket++;
    }
    else 
    {
      team2Score += randomRuns;
    }
    if (team2Balls=== 6 || team2Wicket === 2 || team2Score > team1Score) 
    {
      playerTurn = 3;
      gameOver();
    }
  }


  if (playerTurn === 1) 
  {
    team1Balls++;
    document.querySelector(`#team1-superover div:nth-child(${team1Balls})`).textContent = randomRuns;
    if (randomRuns === "W") 
        {
            team1Wicket++;
        } 
    else 
        {
            team1Score += randomRuns;
        }
    if (team1Balls === 6 || team1Wicket === 2) 
        {
            playerTurn = 2;
        }
    }
  updateScore();
};
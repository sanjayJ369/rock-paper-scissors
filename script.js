function random(min, max) 
{
    //min in exclusive and max in inclusive
    min = min || 0;
    return (Math.floor(Math.random() * (max - min) + min + 1));
}

function getComputerChoice() 
{   
    let choices = ["rock", "paper", "scissor"];
    let ch = random(0,2);
    console.log(ch);
    return choices[ch];
}

function playRound(e)
{   
    /* 
    returns 1 if player one(human) is winner 
    returns 2 if player two(computer) is winner 
    and 0 if it is a draw
    */
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.dataset["key"];

    console.log(e.target.dataset["key"]);
    console.log(playerSelection, computerSelection);

    if (playerSelection == "rock")
    {
        if (computerSelection == "scissor")
        {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        }
        else if (computerSelection == "paper")
        {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        }
        else if (computerSelection == "scissor")
        {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }
    else if (playerSelection == "scissor")
    {
        if (computerSelection == "paper")
        {
            playerScore.textContent = parseInt(playerScore.textContent) + 1;
        }
        else if (computerSelection == "rock")
        {
            computerScore.textContent = parseInt(computerScore.textContent) + 1;
        }
    }

}

function game() {
    let winner = null;
    let round_winner = null;
    let playerSelection;
    let h_score = 0; // human score
    let c_score = 0; // computer score
    let rounds = 0;
    while (winner == null) {

        playerSelection = prompt("enter your choise");
        round_winner = playRound(playerSelection, getComputerChoice());

        if (round_winner == 1)
        {
            h_score++;
        }
        else if (round_winner == 2)
        {
            c_score ++;
        }
        rounds++;

        if (rounds  == 5) 
        {
            if (h_score > c_score)
            {
                return "human wins.........!"
            }
            else if(c_score > h_score)
            {
                return "computer wins.......!"
            }
            else 
            {
                return "its a draw!, another war is required to decide the winner"
            }
        }
    }
}

const btns = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#player"); 
const computerScore = document.querySelector("#computer")
btns.forEach(btn => btn.addEventListener("click", playRound));
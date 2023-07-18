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


    //display the current choices made player player and computer
    const choiceEmoji = {
        rock : "✊",
        paper : "🖐️",
        scissor : "✌️"
    };
    document.querySelector("#hChoice").textContent = choiceEmoji[playerSelection];
    document.querySelector("#cmpChoice").textContent = choiceEmoji[computerSelection];

    let round_winner = winner(playerSelection, computerSelection);
    
    const winnerDisp = document.querySelector("#winnerDisplay");
    winnerDisp.textContent = "";

    if (round_winner == 1) {
        const playerScore = document.querySelector("#player");
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (round_winner == -1) {
        const computerScore = document.querySelector("#computer");
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    //updating the rounds
    rounds += 1;
    const rounds_num = document.querySelector("#rounds");
    rounds_num.textContent = rounds;

    if (rounds == 5) {
        rounds = 0;
        const playerScore = parseInt(document.querySelector("#player").textContent);
        const computerScore = parseInt(document.querySelector("#computer").textContent);
        if (playerScore > computerScore) {
            winnerDisp.textContent = "humans are victorious...!";
        } else if (computerScore > playerScore) {
            winnerDisp.textContent = "computers have taken over the world..!";
        } else {
            winnerDisp.textContent = "i foresee another war";
        }

        //reset the player scores to zero
        document.querySelector("#player").textContent = 0;
        document.querySelector("#computer").textContent = 0;
        rounds_num.textContent = rounds;
    }

}

function winner(playerSelection, computerSelection)
{   
    /*
        function returns 1 if player is won
        return -1 if computer is won
        0 if it is a draw
    */
    if (playerSelection == "rock")
    {
        if (computerSelection == "scissor")
        {
            return 1;
        }
        else if (computerSelection == "paper")
        {
            return -1;
        }
    }
    else if (playerSelection == "paper")
    {
        if (computerSelection == "rock")
        {
            return 1;
        }
        else if (computerSelection == "scissor")
        {
            return -1;
        }
    }
    else if (playerSelection == "scissor")
    {
        if (computerSelection == "paper")
        {
            return 1;
        }
        else if (computerSelection == "rock")
        {
            return -1;
        }
    }
    return 0;
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

let rounds = 0;

const btns = document.querySelectorAll(".btn");
const playerScore = document.querySelector("#player"); 
const computerScore = document.querySelector("#computer")
btns.forEach(btn => btn.addEventListener("click", playRound));

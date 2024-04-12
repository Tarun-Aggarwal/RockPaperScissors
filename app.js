let boxes = document.querySelectorAll("img");
let userScore = 0;
let compScore = 0;
let userChoice = "";
let compChoice = "";
let choices = ["rock", "paper", "scissors"];
let displayBoard = document.querySelector(".display-board");
let winner;

for(box of boxes){
    box.addEventListener("click", function (){
        console.log(this.getAttribute("id"));
        userChoice = this.getAttribute("id");
        generateCompChoice();
    })
}

function generateCompChoice(){
    let ranIdx = Math.floor(Math.random()*3);
    compChoice = choices[ranIdx];

    checkAns();
}

function checkAns(){
    if(userChoice === compChoice){
        displayBoard.innerText = "It's a Tie";
        displayBoard.setAttribute("id", "blue");
    } 
    else if(userChoice == "rock"){
        if(compChoice == "paper"){
            displayBoard.innerText = "Lose! Computer's rock beat your paper";
            displayBoard.setAttribute("id", "red");
            compScore++;
            winner = "comp";
        } else{
            displayBoard.innerText = "Win! Your rock beat computer's scissors";
            displayBoard.setAttribute("id", "green");
            userScore++;
            winner = "user";
        }
    }
    else if(userChoice == "paper"){
        if(compChoice == "rock"){
            displayBoard.innerText = "Win! Your paper beat computer's rock";
            displayBoard.setAttribute("id", "green");
            userScore++;
            winner = "user";
        } else{
            displayBoard.innerText = "Lose! Computer's scissors beat your paper";
            displayBoard.setAttribute("id", "red");
            compScore++;
            winner = "comp";
        }
    }
    else if(userChoice == "scissors"){
        if(compChoice == "rock"){
            displayBoard.innerText = "Lose! Computer's rock beat your scissors";
            displayBoard.setAttribute("id", "red");
            compScore++;
            winner = "comp";
        } else{
            displayBoard.innerText = "Win! Your scissors beat computer's paper";
            displayBoard.setAttribute("id", "green");
            userScore++;
            winner = "user";
        }
    }

    updateScore(winner);
}

function updateScore(winner){
    if(winner == "user"){
        document.querySelector(".user-score").innerText = `${userScore}`;
    } else{
        document.querySelector(".comp-score").innerText = `${compScore}`;
    }
}
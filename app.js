let userScore = 0;
var userDisplay = document.querySelector("#user-score");
var userBox = document.querySelector(".userBox");

let compScore = 0;
var compDisplay = document.querySelector("#comp-score");
var compBox = document.querySelector(".compBox");

var msgBox = document.querySelector(".msg-box");

var buttons = document.querySelectorAll(".button");

// To generate Computer Choice
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("It's a Draw");
    msgBox.innerHTML = "Draw!";
};

// To display Winner
const showWinner = (userWins) => {
    if(userWins === true){
        console.log("User Wins!")
        msgBox.innerText = "You win!";
    }
    else{
        console.log("Computer Wins!")
        msgBox.innerText = "Computer wins!"
    }
};

// to count Score
const winCount = (userWins) => {
    if (userWins === true){
       userScore++;
       userDisplay.innerText = userScore;
    }
    else {
        compScore++;
        compDisplay.innerText = compScore;
    }
    console.log("User: ", userScore);
    console.log("Comp: ", compScore);
}
// Logic of the game
const playGame = (userChoice) => {
    console.log("User: ", userChoice);

    let compChoice = genCompChoice();
    console.log("Comp: ",compChoice);

    if (userChoice === compChoice){
        drawGame();
    } 
    else {
        // Case 1
        let userWins = true;
        if(userChoice === "Rock"){
        // comp = paper / scissor
        userWins = compChoice  === "Paper"?false:true;
        }
        else if(userChoice === "Paper"){
        //    comp = rock / scissor
        userWins = compChoice === "Scissor"?false:true;      
        }
        else{
        // comp = rock / paper
        userWins = compChoice === "Rock"?false:true;
        }
        showWinner(userWins);
        winCount(userWins);
        userBox.innerText = "You: " + userChoice;
        userBox.classList.remove("hidden");
        compBox.innerText = "Computer: " + compChoice;
        compBox.classList.remove("hidden");
    }
};
// When User clicks
buttons.forEach((button) => {
    const userChoice = button.getAttribute("alt");
    button.addEventListener("click",() => {
       playGame(userChoice);
    })
})
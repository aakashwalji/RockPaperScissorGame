let userScore = 0;
var userDisplay = document.querySelector("#user-score");
var userText = document.querySelector(".userText");

let compScore = 0;
var compDisplay = document.querySelector("#comp-score");
var compText = document.querySelector(".compText");

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
    msgBox.style.backgroundColor = "#81A4CD";
};

// To display Winner
const showWinner = (userWins) => {
    if(userWins === true){
        console.log("User Wins!")
        msgBox.innerText = "You win!";
        msgBox.style.backgroundColor = "#86CB92";
        
    }
    else{
        console.log("Computer Wins!")
        msgBox.innerText = "Computer wins!"
        msgBox.style.backgroundColor = "#F87666";
    }
};

// to count Score
const winCount = (userWins) => {
    if (userWins === true){
       userScore++;
       userDisplay.innerText = userScore;
       userDisplay.style.color = "#86CB92";
    }
    else {
        compScore++;
        compDisplay.innerText = compScore;
        compDisplay.style.color = "#F87666";
    }
    console.log("User: ", userScore);
    console.log("Comp: ", compScore);
}
// to set bg
const setBgImage = (userChoice,compChoice) =>{

    //User
    if (userChoice === "Rock"){
        document.querySelector(".userChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/rock.png)";
    }
    else if (userChoice === "Paper"){
        document.querySelector(".userChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/paper.png)";

    }
    else {
        document.querySelector(".userChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/scissors.png)";
    }

    //Computer
    if (compChoice === "Rock"){
        document.querySelector(".compChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/rock.png)";
    }
    else if (compChoice === "Paper"){
        document.querySelector(".compChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/paper.png)";

    }
    else {
        document.querySelector(".compChImg").style.backgroundImage = "url(/Repo/RockPaperScissorGame/Images/scissors.png)";
    }
};

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
        else {
        // comp = rock / paper
        userWins = compChoice === "Rock"?false:true;
        }
        showWinner(userWins);
        winCount(userWins);
        setBgImage(userChoice,compChoice);
        userText.innerText = "You: " + userChoice;
        userText.classList.remove("hidden");

        compText.innerText = "Computer: " + compChoice;
        compText.classList.remove("hidden");
    }
};
// When User clicks
buttons.forEach((button) => {
    const userChoice = button.getAttribute("alt");
    button.addEventListener("click",() => {
       playGame(userChoice);
    })
})
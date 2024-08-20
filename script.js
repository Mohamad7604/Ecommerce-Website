let userScore1 = 0;
let aiScore1 = 0;
let draws1 = 0;

function play(userChoice){
    let aiChoice = getAiChoice();
    const result = determineWinner(userChoice, aiChoice);
    updateResults(result);
    checkWinner();
    document.getElementById('result').innerText = `User chose ${userChoice}, AI chose ${aiChoice}`;
}

function getAiChoice(){
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];

}

function determineWinner(userChoice, aiChoice){
    if(userChoice === aiChoice){
        return "draw";
    }
    else if(
        (userChoice === "rock" && aiChoice === "scissors") ||
        (userChoice === "paper" && aiChoice === "rock") ||
        (userChoice === "scissors" && aiChoice === "paper")
    ){
        return "user";
    } else {
        return "ai";
    }
}
function checkWinner(){
    if(userScore1===5){
        alert("User wins ")
        location.reload("true");

    }else if(aiScore1===5){
        alert(" Ai wins");
        location.reload("true");

    }

}

function updateResults(result){
    let userScore = document.getElementById("userScore");
    let aiScore = document.getElementById("aiScore");
    let drawScore = document.getElementById("draws");

    if (result === "user"){
        userScore1++;
        userScore.innerHTML = userScore1;
    } else if(result === "ai") {
        aiScore1++;
        aiScore.innerHTML = aiScore1;
    } else {
        draws1++;
        drawScore.innerHTML = draws1;
    }
}
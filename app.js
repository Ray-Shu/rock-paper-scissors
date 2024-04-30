let userScore = 0;  
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p"); 
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

const choices = ['r', 'p', 's']; 
const smallUserWord = "user".fontsize(3).sub()
const smallCompWord = "computer".fontsize(3).sub()

function getComputerChoice(){ 
    const index = Math.floor(Math.random()*3); 
    return choices[index];
}

function convertToWord(letter){
    if (letter === "r") return "Rock"; 
    if (letter === "p") return "Paper"; 
    return "Scissors"; 
}

function win(user, computer){ 
    userScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;  
    const choice_div = document.getElementById(user);
    choice_div.classList.add('green-glow');
    setTimeout(() => choice_div.classList.remove('green-glow'), 750); 
}

function lose(user, computer){ 
    computerScore++; 
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} loses to ${convertToWord(computer)}${smallCompWord}. You lost...`;  
    const choice_div = document.getElementById(user);
    choice_div.classList.add('red-glow');
    setTimeout(() => choice_div.classList.remove('red-glow'), 750);
}

function draw(user){     
    result_p.innerHTML = `It's a draw.`; 
    const choice_div = document.getElementById(user);
    choice_div.classList.add('gray-glow');
    setTimeout(() => choice_div.classList.remove('gray-glow'), 750);
}

function game(userChoice) { 
    const computerChoice = getComputerChoice(); 
    switch (userChoice + computerChoice){ 
        case "rs":
        case "pr": 
        case "sp": 
            win(userChoice, computerChoice);  
            break; 
        case "rp": 
        case "ps": 
        case "sr": 
            lose(userChoice, computerChoice);
            break;
        case "rr": 
        case "pp": 
        case "ss": 
            draw(userChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function(){
        game("r");
    })
    
    paper_div.addEventListener('click', function(){
        game("p");
    })
    
    scissor_div.addEventListener('click', function(){
        game("s");
    })
}

main(); 

console.log("jeg er i guessnumber")

const lblMessage = document.querySelector(".message");
console.log(lblMessage)
console.log(lblMessage.textContent)

const lblNumber = document.querySelector(".number")
console.log(lblNumber)

let lblScore = document.querySelector(".score")
console.log(lblScore)

let highScore = document.querySelector(".highscore")
console.log(highScore)

const inpGuess = document.querySelector(".guess")
console.log(inpGuess);

const pbGuess = document.querySelector(".check")

const pbAgain = document.querySelector(".again")

const bdy = document.querySelector("body")

let randomNumb = 0;

function randomNumber(){
    randomNumb = Math.trunc(Math.random()*20+1);
    console.log(randomNumb);
    // lblNumber.textContent= randomNumb --> for ikke at vise nummeret
}

function reset(){
    lblNumber.textContent = "";
    bdy.style.backgroundColor = "black";
}

pbAgain.addEventListener("click", randomNumber)
pbAgain.addEventListener("click", reset)

let currentScore = Number(lblScore.textContent);
let currentHighscore = Number(highScore.textContent)

function calculateHighScore(){
    if(currentScore > currentHighscore) {
        highScore.textContent = currentScore + 10;
    }
}

function guessNumber(){
    const guess = Number(inpGuess.value);
    if(guess === randomNumb) {
        lblMessage.textContent = "Godt gættet!"
        lblNumber.textContent = randomNumb
            calculateHighScore()
             currentScore += 10;
                lblScore.textContent = currentScore;
                    bdy.style.backgroundColor = "green";
                    if(currentScore >= 50){
                        lblMessage.textContent = "DU HAR NÅET MAX!";
                        const overskrift = document.querySelector("h1")
                        overskrift.textContent = "DU HAR VUNDET"
                     }
    }else if(guess < randomNumb){
        lblMessage.textContent = "Det er for lavt!"
            currentScore--;
                lblScore.textContent = currentScore;
    }else if(guess > randomNumb){
        lblMessage.textContent = "Det er for højt"
            currentScore--;
                lblScore.textContent = currentScore;
    }else{
        lblMessage.textContent = "Prøv igen "
    }
}

pbGuess.addEventListener("click", guessNumber)

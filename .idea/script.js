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

const gameOver = document.getElementById("gameOver")

let randomNumb = 0;

function randomNumber(){
    randomNumb = Math.trunc(Math.random()*20+1);
    console.log(randomNumb);
    // lblNumber.textContent= randomNumb --> for ikke at vise nummeret
}

function reset(){
    currentScore = 20;
    lblScore.textContent = currentScore;
    lblNumber.textContent = "?";
    bdy.style.backgroundColor = "black";
}

pbAgain.addEventListener("click", () => {
    randomNumber();
    reset();
});

let currentScore = Number(lblScore.textContent);
let currentHighscore = Number(highScore.textContent)

function calculateHighScore(){
    if (currentScore > currentHighscore) {
        currentHighscore = currentScore;
        highScore.textContent = currentHighscore;
    }
}

function guessNumber(){
    const guess = Number(inpGuess.value);

    if(isNaN(guess) || guess === 0){
        lblMessage.textContent = "Du skal indtaste et gyldigt tal"
        return;
    }


    if(guess === randomNumb) {
        lblMessage.textContent = "Godt gættet!"
        lblNumber.textContent = randomNumb
            calculateHighScore()
             // currentScore += 10;
                lblScore.textContent = currentScore;
                    bdy.style.backgroundColor = "green";
                    const winSound = document.getElementById("correctSound");
                    winSound.play();
                    /*if(currentScore >= 50){
                        lblMessage.textContent = "DU HAR NÅET MAX!";
                        const overskrift = document.querySelector("h1")
                        overskrift.textContent = "DU HAR VUNDET"
                     }*/
    }else if(guess < randomNumb){
        lblMessage.textContent = "Det er for lavt!"
            currentScore--;
                lblScore.textContent = currentScore;
                gameOver.play();

    }else if(guess > randomNumb) {
        lblMessage.textContent = "Det er for højt"
            currentScore--;
                lblScore.textContent = currentScore;
                gameOver.play();
    }else{
        lblMessage.textContent = "Prøv igen "
    }
}

pbGuess.addEventListener("click", guessNumber)
randomNumber();
reset();

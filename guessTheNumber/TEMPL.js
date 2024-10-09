


const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}.`);
    guess = Number(guess);

    if(isNaN(guess) || guess < minNum || guess > maxNum){ // checks validity

        if(guess == "QUIT"){
            running = false;
            break;
        }

        window.alert("Please enter a valid number")
    }
    else{
        attempts++;
        
        if(guess < answer){
            window.alert("TOO LOW")
        }
        else if(guess > answer){
            window.alert("TOO HIGH")
        }
        else{
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} tries.`)
            running = false;
        }
    }

    
}
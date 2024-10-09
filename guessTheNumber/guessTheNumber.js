const interactBtn = document.getElementById("interactBtn");
const infoP = document.getElementById("infoP");
const promptP = document.getElementById("promptP");
const numInput = document.getElementById("numInput");

const minNum = 1;
const maxNum = 100;

let attempts;
let guess;
let answer;
let running = false;

interactBtn.onclick = function(){
    if(!running){
        console.log(`Started running [running= ${running}]`);

        running = true;
        interactBtn.innerHTML = "GUESS";
        infoP.innerHTML = "Attempts: 0";
        numInput.value = "";

        answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        
    }
    else{
        if(isNaN(numInput.value) || Number(numInput.value) < minNum || Number(numInput.value) > maxNum){
            promptP.innerHTML = `'${numInput.value}' is not a valid number, try again.`;
        }
        else{
            attempts++;
        
        if( Number(numInput.value) < answer){
            promptP.innerHTML = "TOO LOW";
        }
        else if(Number(numInput.value) > answer){
            promptP.innerHTML = "TOO HIGH";
        }
        else{ // GAME OVER
            infoP.innerHTML = `CORRECT! The answer was ${answer}. It took you ${attempts} tries.`;
            promptP.innerHTML = "";

            running = false;
        }
        }
    }
}
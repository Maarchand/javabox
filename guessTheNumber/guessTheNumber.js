const interactBtn = document.getElementById("interactBtn");
const infoP = document.getElementById("infoP");
const promptP = document.getElementById("promptP");
const numInput = document.getElementById("numInput");



const minNum = 1;
const maxNum = 99;
const topBar = document.getElementById("topBar");

topBar.innerHTML = `Try to guess the number between ${minNum} and ${maxNum}`;

numInput.disabled = true;

let attempts;
let guess;
let answer;
let running = false;
let boundToRestart = false;

interactBtn.onclick = function(){
    if(!running){
        if(boundToRestart){
            numInput.disabled = true;
            interactBtn.innerHTML = "PLAY";
            infoP.innerHTML = "Attempts: 0";
            promptP.innerHTML = "";
            numInput.value = "";
            boundToRestart = false;
        }
        else{

            console.log(`Started running [running= ${running}]`);

            running = true;
            numInput.disabled = false;
            attempts = 0;
            interactBtn.innerHTML = "GUESS";
            infoP.innerHTML = "Attempts: 0";
            numInput.value = "";

            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }
        
    }
    else{
        if(isNaN(numInput.value) || Number(numInput.value) < minNum || Number(numInput.value) > maxNum){
            promptP.innerHTML = `'${numInput.value}' is not a valid number, try again.`;
            numInput.value = "";
        }
        else{
            attempts++;
            infoP.innerHTML = `Attempts: ${attempts}`
        
        if( Number(numInput.value) < answer){
            promptP.innerHTML = "TOO LOW";
            numInput.value = "";
        }
        else if(Number(numInput.value) > answer){
            promptP.innerHTML = "TOO HIGH";
            numInput.value = "";
        }
        else{ // GAME OVER
            boundToRestart = true;
            infoP.innerHTML = `CORRECT! The answer was ${answer}. It took you ${attempts} tries.`;
            numInput.value = "";
            numInput.disabled = true;
            promptP.innerHTML = "🥳🥳";

            interactBtn.innerHTML = "RESET";
            attempts = 0;

            running = false;
        }
        }
    }
}
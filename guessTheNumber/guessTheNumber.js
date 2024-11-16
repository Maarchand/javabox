const interactBtn = document.getElementById("interactBtn");
const infoP = document.getElementById("infoP");
const promptP = document.getElementById("promptP");
const numInput = document.getElementById("numInput");



const minNum = 1;
const maxNum = 100;
const topBar = document.getElementById("topBar");

topBar.innerHTML = `Raad het nummer tussen ${minNum} en ${maxNum}`;

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
            interactBtn.innerHTML = "START";
            infoP.innerHTML = "Pogingen: 0";
            promptP.innerHTML = "";
            numInput.value = "";
            boundToRestart = false;
        }
        else{

            console.log(`Started running [running= ${running}]`);

            running = true;
            numInput.disabled = false;
            numInput.style = "border: 10px solid cadetblue;";
            attempts = 0;
            interactBtn.innerHTML = "RAAD";
            infoP.innerHTML = "Pogingen: 0";
            numInput.value = "";

            answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        }
        
    }
    else{
        if(isNaN(numInput.value) || Number(numInput.value) < minNum || Number(numInput.value) > maxNum){
            promptP.innerHTML = `'${numInput.value}' is geen deftig nummer a broer`;
            numInput.value = "";
        }
        else{
            attempts++;
            infoP.innerHTML = `Pogingen: ${attempts}`
        
        if( Number(numInput.value) < answer){
            promptP.innerHTML = "TE LAAG";
            numInput.value = "";
        }
        else if(Number(numInput.value) > answer){
            promptP.innerHTML = "TE HOOG";
            numInput.value = "";
        }
        else{ // GAME OVER
            boundToRestart = true;
            infoP.innerHTML = `juist bro het antwoord was ${answer}. ge moest ${attempts} keer proberen.`;
            numInput.value = "";
            numInput.disabled = true;
            numInput.style = "border: 10px solid grey;";
            promptP.innerHTML = "🥳🥳";

            interactBtn.innerHTML = "HERTSTART";
            attempts = 0;

            running = false;
        }
        }
    }
}
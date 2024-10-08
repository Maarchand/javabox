let randomNum;
const min = 1;
const max = 6;


document.getElementById("rollBtn").onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
    document.getElementById("numberDisplay").textContent = randomNum;
}
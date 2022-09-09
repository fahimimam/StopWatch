const playButton = document.querySelector("#playBtn");
const lapButton = document.querySelector("#lapBtn");
const resetButton = document.querySelector("#resetBtn");
const clrButton = document.querySelector("#clrbtn");
const second = document.querySelector(".sc");
const centiSecond = document.querySelector(".cs");
const minute = document.querySelector(".mn")
const laps = document.querySelector(".laps")
const bg = document.querySelector(".outer-circle");


let isPlay = false;
let secCounter = 0;
let sec;
let centiSec;
let centiSecCounter = 0;
let min;
let minCounter = 0;
let lapItem = 0;

const play = () => {
    toggleButton();
    if (isPlay) {
        playButton.textContent = "Pause";
        bg.classList.add("animation-bg");
        sec = setInterval(() => {
            secCounter++;
            if(secCounter === 60) secCounter = 0;
            if (secCounter < 10) {
                second.innerText= `0${secCounter} : `;
            }
            else {
                second.innerText= `${secCounter} : `;
            }

        }, 1000);
        centiSec = setInterval(() => {
            centiSecCounter++;
            if (centiSecCounter === 100) centiSecCounter = 0;
            if (centiSecCounter < 10) {
                centiSecond.textContent = `0${centiSecCounter}`;
            }
            else {
                centiSecond.textContent = `${centiSecCounter}`;
            }
        }, 10);

        min = setInterval(() => {
            minCounter++;
            if (minCounter < 10) {
                minute.textContent = `0${minCounter} : `;
            }
            else {
                minute.textContent = `${minCounter} : `;
            }
        }, 60000);


        // toggleButton();
        isPlay = false;

    }
    else {
        playButton.textContent = "Play";
        bg.classList.remove("animation-bg")
        clearInterval(sec);
        clearInterval(centiSec);
        clearInterval(min);
        // toggleButton();
        isPlay = true;

    }
}
const reset = () => {
    clearInterval(sec);
    clearInterval(centiSec);
    clearInterval(min);
    secCounter = 0;
    centiSecCounter = 0;
    minCounter = 0;
    minute.textContent = "00 : "
    second.textContent = "00 : ";
    centiSecond.textContent = "00";
    playButton.textContent = "Play";
    resetButton.classList.add("hidden");
    lapButton.classList.add("hidden");
}
const lap = () =>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timestamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class","number");
    timestamp.setAttribute("class","time-stamp");
    number.textContent = `#${++lapItem}`;
    timestamp.textContent = `${minCounter} : ${secCounter} : ${centiSecCounter}`;
    clrButton.classList.remove("hidden");
    li.append(number, timestamp);
    laps.append(li);
}

const clearAll = () => {
    lapItem = 0;
    laps.innerHTML = '';
    clrButton.classList.add("hidden");
}

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

resetButton.addEventListener("click", reset);
playButton.addEventListener("click", play);
lapButton.addEventListener("click", lap)
clrButton.addEventListener("click", clearAll);


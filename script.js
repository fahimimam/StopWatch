const playButton = document.querySelector("#playBtn");
const lapButton = document.querySelector("#lapBtn");
const resetButton = document.querySelector("#resetBtn");
const second = document.querySelector(".sc");
const centiSecond = document.querySelector(".cs");
const minute = document.querySelector(".mn")

let isPlay = false;
let secCounter = 0;
let sec;
let centiSec;
let centiSecCounter = 0;
let min;
let minCounter = 0;

const toggleButton = () => {
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () => {
    toggleButton();
    if (isPlay) {
        playButton.textContent = "Pause";
        sec = setInterval(() => {
            secCounter++;
            if(secCounter === 60) secCounter = 0;
            if (secCounter < 10) {
                second.textContent = `0${secCounter} : `;
            }
            else {
                second.textContent = `${secCounter} : `;
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
    secCounter = 0;
    centiSecCounter = 0;
    minCounter = 0;
    minute.textContent = "00 : "
    second.textContent = "00 : ";
    centiSecond.textContent = "00";
    playButton.textContent = "Toggle";
    resetButton.classList.add("hidden");
    lapButton.classList.add("hidden");
}


resetButton.addEventListener("click", reset);
playButton.addEventListener("click", play);


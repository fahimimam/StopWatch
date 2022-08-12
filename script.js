const playButton = document.querySelector("#playBtn");
const lapButton = document.querySelector("#lapBtn");
const resetButton = document.querySelector("#resetBtn");

let isPlay = false;

const toggleButton = () =>{
    lapButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

const play = () =>{
    if(isPlay){
        playButton.textContent = "Pause";
        // toggleButton();
        isPlay = false;

    }
    else{
        playButton.textContent = "Play";
        // toggleButton();
        isPlay = true;

    }
    toggleButton();
}

const playSec = () =>{
    setInterval(() =>{
         
    })
}

const reset = () =>{
    resetButton.classList.add("hidden");
    lapButton.classList.add("hidden");
}






resetButton.addEventListener("click", reset);
playButton.addEventListener("click", play);


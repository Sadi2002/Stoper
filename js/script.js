const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')
const historyBtn = document.querySelector('.history')
const stopwatch = document.querySelector('.stopwatch')
const timeBtn = document.querySelector('.time')
const timeList = document.querySelector('.time-list')
const infoBtn = document.querySelector('.fa-question')
const modalShadow = document.querySelector('.modal-shadow')
const closeModalBtn = document.querySelector('.close')
const colorBtn = document.querySelector('.fa-paint-brush')
 
let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const stoperStart = () => {
    clearInterval(countTime)

    countTime = setInterval(() => {
    if(seconds < 9){
        seconds++;
        stopwatch.textContent = `${minutes}:0${seconds}`
    } else if (seconds >= 9 && seconds < 59) {
        seconds++;
        stopwatch.textContent = `${minutes}:${seconds}`
    } else {
        minutes++;
        seconds = 0;
        stopwatch.textContent = `${minutes}:00`
    }

    }, 1000)

}

const stoperStop = () => {

    timeBtn.innerHTML = `Ostatni czas: ${stopwatch.textContent}`

    if (stopwatch.textContent !== '0:00'){
        timeBtn.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent)
    };

    clearStuff()
}

const stoperPause = () => {
    clearInterval(countTime)
}

const stoperReset = () => {
    
    timeBtn.style.visibility = 'hidden'
    timesArr = [];
    clearStuff();

}

const clearStuff = () => {

    clearInterval(countTime)
    stopwatch.textContent = '0:00'
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const stoperHistory = () => {
    timeList.textContent = '';
    let num = 1;

    timesArr.forEach(el => {          //el jako element. Na dole musi być dokladnie taki sam napis czyli ,,el,,
 
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${el}</span>`

        timeList.appendChild(newTime)
        num++;
    })
}

const stoperModal = () => {
    if(!(modalShadow.style.display === 'block')){
        modalShadow.style.display = 'block'
    } else {
        modalShadow.style.display = 'none' 
    };

    modalShadow.classList.toggle('modal-animation')
}

startBtn.addEventListener('click', stoperStart)
pauseBtn.addEventListener('click', stoperPause)
stopBtn.addEventListener('click', stoperStop)
resetBtn.addEventListener('click', stoperReset)
historyBtn.addEventListener('click', stoperHistory)
infoBtn.addEventListener('click', stoperModal)
closeModalBtn.addEventListener('click', stoperModal)
window.addEventListener('click', e => e.target === modalShadow ? stoperModal() : false)



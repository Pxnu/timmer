let hour0 = document.querySelector('#hour0')
let hour1 = document.querySelector('#hour1')
let minute0 = document.querySelector('#minute0')
let minute1 = document.querySelector('#minute1')

const btnStart = document.querySelector('#btnStart')
const btnReset = document.querySelector('#btnReset')

let timerInterval = null
let totalSeconds = 0

const updateDisplay = () => {
    let h = Math.floor(totalSeconds / 3600)
    let m = Math.floor((totalSeconds % 3600) / 60)

    let hStr = h.toString().padStart(2, "0")
    let mStr = m.toString().padStart(2, "0")

    hour0.value = hStr[0]
    hour1.value = hStr[1]
    minute0.value = mStr[0]
    minute1.value = mStr[1]
}

const startTimer = (e) => {
    if(timerInterval) {
        clearInterval(timerInterval)
    }

    let valH0 = hour0.value.trim() || '0'
    let valH1 = hour1.value.trim() || '0'
    let valM0 = minute0.value.trim() || '0'
    let valM1 = minute1.value.trim() || '0'
    
    let hours =  parseInt(valH0 + valH1)
    let minutes = parseInt(valM0 + valM1)

    totalSeconds = (hours * 3600) + (minutes * 60)

    if(totalSeconds <= 0) {
        return
    }

    timerInterval = setInterval(() => {
        if(totalSeconds > 0) {
            totalSeconds--
            updateDisplay()
        } else {
            clearInterval(timerInterval)
            timerInterval = null
            alert('Time out!')
        }
    }, 1000)
}

const resetTimer = () => {
    
}

btnStart.addEventListener('click', startTimer)
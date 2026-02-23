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

btnStart.addEventListener('click', timemer)
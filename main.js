let hour0 = document.querySelector('#hour0')
let hour1 = document.querySelector('#hour1')
let minute0 = document.querySelector('#minute0')
let minute1 = document.querySelector('#minute1')
let second0 = document.querySelector('#second0');
let second1 = document.querySelector('#second1');

const btnStart = document.querySelector('#btnStart')
const btnReset = document.querySelector('#btnReset')

let output = document.querySelector('#output')

let timerInterval = null
let totalSeconds = 0

const updateDisplay = () => {
    let h = Math.floor(totalSeconds / 3600)
    let m = Math.floor((totalSeconds % 3600) / 60)
    let s = totalSeconds % 60;

    let hStr = h.toString().padStart(2, "0")
    let mStr = m.toString().padStart(2, "0")
    let sStr = s.toString().padStart(2, '0')

    hour0.value = hStr[0]
    hour1.value = hStr[1]
    minute0.value = mStr[0]
    minute1.value = mStr[1]
    second0.value = sStr[0]
    second1.value = sStr[1]
}

const startTimer = (e) => {
    if(timerInterval) {
        clearInterval(timerInterval)
    }

    let valH0 = hour0.value.trim() || '0'
    let valH1 = hour1.value.trim() || '0'
    let valM0 = minute0.value.trim() || '0'
    let valM1 = minute1.value.trim() || '0'
    let valS0 = second0.value.trim() || '0'
    let valS1 = second1.value.trim() || '0'
    
    let hours =  parseInt(valH0 + valH1)
    let minutes = parseInt(valM0 + valM1)
    let seconds = parseInt(valS0 + valS1)

    totalSeconds = (hours * 3600) + (minutes * 60) + seconds

    if(totalSeconds === 0) {
        output.innerText = "Please enter your time you want to countdown!"
        output.style.color = 'red'
        return
    }

    output.innerText = 'Time is countingdown!'
    output.style.color = '#28a745'

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

            resetTimer()

            output.innerText = 'Time out!'
            output.style.color = 'red'
        }
    }, 1000)
}

const resetTimer = () => {
    if(timerInterval) {
        clearInterval(timerInterval)
    }

    timerInterval = null
    totalSeconds = 0

    hour0.value = '';
    hour1.value = '';
    minute0.value = '';
    minute1.value = '';
    second0.value = ''
    second1.value = ''

    output.innerText = 'Time is reset'
    output.style.color = "initial"    
}

btnStart.addEventListener('click', startTimer)
btnReset.addEventListener('click', resetTimer)

const inputs = [hour0, hour1, minute0, minute1, second0, second1]

inputs.forEach(input => {
    input.addEventListener('keypress', (e) => {
        if(e.key === 'enter') {
            e.preventDefault()
            startTimer()
        }
    })
})
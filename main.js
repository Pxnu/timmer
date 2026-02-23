let hour0 = document.querySelector('#hour0')
let hour1 = document.querySelector('#hour1')
let minute0 = document.querySelector('#minute0')
let minute1 = document.querySelector('#minute1')

const btnStart = document.querySelector('#btnStart')
const btnReset = document.querySelector('#btnReset')


let timemer = () => {
    let valH0 = hour0.value.trim()
    let valH1 = hour1.value.trim()
    let valM0 = minute0.value.trim()
    let valM1 = minute1.value.trim()

    
}

btnStart.addEventListener('click', timemer)
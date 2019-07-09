var control = document.querySelector('button')
var text = document.querySelector('p')

function setButton() {
    if (control.textContent === 'Start Game') {
        control.textContent = 'Stop Game'
        text.textContent = 'The game is started.'
    } else {
        control.textContent = 'Start Game'
        text.textContent = 'The game is stopped.'
    }
}

control.addEventListener('click', setButton)
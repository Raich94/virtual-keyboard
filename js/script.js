// document.addEventListener('keydown', function(event) {
//     console.log(`${event.code}, ${event.key}`)
// });

const outputField = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

// outputField.innerText = '';

keyboard.addEventListener('click', function(event) {
    if(event.target.classList.contains('keyboard__key') || event.target.tagName === "SPAN" ) {
        console.log(event.target.innerText)

        outputField.value += event.target.innerText;
    }
})


document.addEventListener('keydown', function(event) {
    console.log(event.code)
    document.querySelector(`.${event.code}`).classList.add('_active');

    outputField.value += document.querySelector(`.${event.code}`).innerText;
    // if (event.code == 'KeyQ') {
    //     document.querySelector('.KeyQ').classList.add('_active');
    // }
})
document.addEventListener('keyup', function(event) {
    document.querySelector(`.${event.code}`).classList.remove('_active');
})

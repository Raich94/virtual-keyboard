
const outputField = document.querySelector('.textarea');
const keyboard = document.querySelector('.keyboard');

const lowerCase = document.querySelectorAll('.lower');
const upperCase = document.querySelectorAll('.upper');
const caps = document.querySelectorAll('.caps');
const capsShift = document.querySelectorAll('.shift_caps');
const ru = document.querySelectorAll('.ru');
const en = document.querySelectorAll('.en');


let isEn = true;

getSettings();
function changeLanguage() {
    if (isEn) {
        ru.forEach(el => el.classList.remove('hidden'));
        en.forEach(el => el.classList.add('hidden'));
        isEn = false;
    } else {
        ru.forEach(el => el.classList.add('hidden'));
        en.forEach(el => el.classList.remove('hidden'));
        isEn = true;
    }
    localStorage.setItem('language', JSON.stringify(isEn));
}
changeLanguage()


// function getCarriageNumber() {
//     let carriageNumber;
//     outputField.addEventListener("keydown", function () {
//         carriageNumber = this.selectionStart;
//     })
//     return carriageNumber
// }
// console.log(getCarriageNumber())

let carriageNumber;
let beforeCarriage = '';
let afterCarriage = '';
outputField.addEventListener ("click", function () {
    carriageNumber = this.selectionStart;
    console.log(carriageNumber)
    beforeCarriage = outputField.value.slice(0, carriageNumber);
    afterCarriage = outputField.value.slice(carriageNumber, outputField.value.length);
    console.log(beforeCarriage);
    console.log(afterCarriage);
});






keyboard.addEventListener('click', function(event) {
    if(event.target.classList.contains('keyboard__key') || event.target.tagName === "SPAN") {
        console.log(event.target.innerText)

        if (event.target.classList.contains('Tab')) {
            // outputField.value += '    ';
            beforeCarriage += '    ';
            outputField.value = beforeCarriage + afterCarriage;
        } else if (event.target.classList.contains('CapsLock')) {
            document.querySelector('.CapsLock').classList.toggle('_active');
            if (document.querySelector('.CapsLock').classList.contains('_active')) {
                caps.forEach(el => el.classList.remove('hidden'));
                lowerCase.forEach(el => el.classList.add('hidden'));
            } else {
                caps.forEach(el => el.classList.add('hidden'));
                lowerCase.forEach(el => el.classList.remove('hidden'));
            }
            capsShift.forEach(el => el.classList.add('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
            outputField.value;
        } else if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
            outputField.value;
        } else if (event.target.classList.contains('MetaLeft') || event.target.classList.contains('AltRight') || event.target.classList.contains('ControlRight') || event.target.classList.contains('ControlLeft') || event.target.classList.contains('AltLeft')) {
            outputField.value;
        } else if (event.target.classList.contains('Backspace')) {
            // outputField.value = outputField.value.slice(0, outputField.value.length - 1);
            beforeCarriage = beforeCarriage.slice(0, beforeCarriage.length - 1);
            outputField.value = beforeCarriage + afterCarriage;
        } else if (event.target.classList.contains('Enter')) {
            // outputField.value += '\n';
            beforeCarriage += '\n';
            outputField.value = beforeCarriage + afterCarriage;
        } else if (event.target.classList.contains('Delete')) {
            afterCarriage = afterCarriage.slice(1, afterCarriage.length);
            outputField.value = beforeCarriage + afterCarriage;
        } else {
            // outputField.value += event.target.innerText;
            beforeCarriage += event.target.innerText;
            outputField.value = beforeCarriage + afterCarriage;
        }
    }
})

keyboard.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
        // upperCase.forEach(el => el.classList.remove('hidden'));
        // lowerCase.forEach(el => el.classList.add('hidden'));
        if (!document.querySelector('.CapsLock').classList.contains('_active')) {
            upperCase.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
        } else {
            capsShift.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
        }
    }
})
keyboard.addEventListener('mouseup', function(event) {
    if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
        if (!document.querySelector('.CapsLock').classList.contains('_active')) {
            lowerCase.forEach(el => el.classList.remove('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
        } else {
            caps.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
        }
    }
})


document.addEventListener('keydown', function(event) {
    event.preventDefault(); // убрал дефолтное поведение клавиатуры
    console.log(event.code)
    // console.log(event.key)
    let pressedButton = document.querySelector(`.${event.code}`);

    pressedButton.classList.toggle('_active');

    if (event.code == 'Tab') {
        outputField.value += '    ';
    } else if (event.code == 'CapsLock') {
        caps.forEach(el => el.classList.toggle('hidden'));
        lowerCase.forEach(el => el.classList.toggle('hidden'));
        outputField.value;
    } else if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if (!document.querySelector('.CapsLock').classList.contains('_active')) {
            upperCase.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
        } else {
            capsShift.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
        }
    } else if (event.ctrlKey && event.altKey) {
        changeLanguage()
    }
     else if (event.code == 'MetaLeft' || event.code == 'AltRight' || event.key == 'Control' || event.key == 'Alt') {
        outputField.value;
    } else if (event.code == 'Backspace') {
        outputField.value = outputField.value.slice(0, outputField.value.length - 1);
    } else if (event.code == 'Enter') {
        outputField.value += '\n';
    }else if (event.code == 'Delete') {
        outputField.value;
    } else {
        outputField.value += pressedButton.innerText;
    }
})


document.addEventListener('keyup', function(event) {
    let pressedButton = document.querySelector(`.${event.code}`);
    if (!pressedButton.classList.contains('CapsLock')) {
        pressedButton.classList.remove('_active');
    }
    if (event.code == 'ShiftLeft' || event.code == 'ShiftRight') {
        if (!document.querySelector('.CapsLock').classList.contains('_active')) {
            lowerCase.forEach(el => el.classList.remove('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
            caps.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
        } else {
            caps.forEach(el => el.classList.remove('hidden'));
            lowerCase.forEach(el => el.classList.add('hidden'));
            capsShift.forEach(el => el.classList.add('hidden'));
            upperCase.forEach(el => el.classList.add('hidden'));
        }
    }
})

function getSettings() { //получаю из хранилища
    const localStorageLanguage = localStorage.getItem('language');
    if (localStorageLanguage) {
        isEn = JSON.parse(localStorageLanguage);
        changeLanguage()
    }
}

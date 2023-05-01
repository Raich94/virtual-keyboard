
const arrCode = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];
const arrLowerEn = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrUpperEn = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrCapsEn = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
    ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrShiftCapsEn = [
    ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\"', 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrLowerRu = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrUpperRu = [
    ['Ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrCapsRu = [
    ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
];
const arrShiftCapsRu = [
    ['ё', '!', '\"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
    ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
    ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
    ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '▲', 'Shift'],
    ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '◄', '▼', '►', 'Ctrl']
]

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
const h1 = document.createElement('h1');
h1.classList.add('title');
h1.textContent = 'RSS Virtual Keyboard by ';
const link = document.createElement('a');
link.textContent = 'Raich94';
link.setAttribute('href', 'https://github.com/Raich94');
link.setAttribute('target', '_blank');
h1.appendChild(link);
wrapper.appendChild(h1);
const outputField = document.createElement('textarea');
outputField.classList.add('textarea');
outputField.setAttribute('name', 'textarea');
outputField.setAttribute('id', 'textarea');
outputField.setAttribute('cols', '60');
outputField.setAttribute('rows', '10');
wrapper.appendChild(outputField);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');

for (let i = 0; i < arrCode.length; i++) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    keyboard.appendChild(keyboardRow);
    for (let j = 0; j < arrCode[i].length; j++) {
        const keyboardKey = document.createElement('div');
        keyboardKey.classList.add('keyboard__key');
        keyboardKey.classList.add(`${arrCode[i][j]}`);
        const enButton = document.createElement('span');
        enButton.classList.add('en');
        enButton.classList.add(`${arrCode[i][j]}`);
        const lowerBtnEn = document.createElement('span');
        lowerBtnEn.classList.add('lower');
        lowerBtnEn.classList.add(`${arrCode[i][j]}`);
        lowerBtnEn.innerText = `${arrLowerEn[i][j]}`;
        enButton.appendChild(lowerBtnEn);
        const upperBtnEn = document.createElement('span');
        upperBtnEn.classList.add('upper');
        upperBtnEn.classList.add('hidden');
        upperBtnEn.classList.add(`${arrCode[i][j]}`);
        upperBtnEn.innerText = `${arrUpperEn[i][j]}`;
        enButton.appendChild(upperBtnEn);
        const capsBtnEn = document.createElement('span');
        capsBtnEn.classList.add('caps');
        capsBtnEn.classList.add('hidden');
        capsBtnEn.classList.add(`${arrCode[i][j]}`);
        capsBtnEn.innerText = `${arrCapsEn[i][j]}`;
        enButton.appendChild(capsBtnEn);
        const shiftCapsBtnEn = document.createElement('span');
        shiftCapsBtnEn.classList.add('shift_caps');
        shiftCapsBtnEn.classList.add('hidden');
        shiftCapsBtnEn.classList.add(`${arrCode[i][j]}`);
        shiftCapsBtnEn.innerText = `${arrShiftCapsEn[i][j]}`;
        enButton.appendChild(shiftCapsBtnEn);

        const ruButton = document.createElement('span');
        ruButton.classList.add('ru');
        ruButton.classList.add(`${arrCode[i][j]}`);
        ruButton.classList.add('hidden');
        const lowerBtnRu = document.createElement('span');
        lowerBtnRu.classList.add('lower');
        lowerBtnRu.classList.add(`${arrCode[i][j]}`);
        lowerBtnRu.innerText = `${arrLowerRu[i][j]}`;
        ruButton.appendChild(lowerBtnRu);
        const upperBtnRu = document.createElement('span');
        upperBtnRu.classList.add('upper');
        upperBtnRu.classList.add('hidden');
        upperBtnRu.classList.add(`${arrCode[i][j]}`);
        upperBtnRu.innerText = `${arrUpperRu[i][j]}`;
        ruButton.appendChild(upperBtnRu);
        const capsBtnRu = document.createElement('span');
        capsBtnRu.classList.add('caps');
        capsBtnRu.classList.add('hidden');
        capsBtnRu.classList.add(`${arrCode[i][j]}`);
        capsBtnRu.innerText = `${arrCapsRu[i][j]}`;
        ruButton.appendChild(capsBtnRu);
        const shiftCapsBtnRu = document.createElement('span');
        shiftCapsBtnRu.classList.add('shift_caps');
        shiftCapsBtnRu.classList.add('hidden');
        shiftCapsBtnRu.classList.add(`${arrCode[i][j]}`);
        shiftCapsBtnRu.innerText = `${arrShiftCapsRu[i][j]}`;
        ruButton.appendChild(shiftCapsBtnRu);

        keyboardKey.appendChild(enButton);
        keyboardKey.appendChild(ruButton);
        keyboardRow.appendChild(keyboardKey);
    }
}

wrapper.appendChild(keyboard);
const description = document.createElement('p');
description.classList.add('description');
description.innerText = 'Клавиатура создана в операционной системе Windows';
wrapper.appendChild(description);
const language = document.createElement('p');
language.classList.add('language');
language.innerText = 'Для переключения языка комбинация: левые ctrl + alt';
wrapper.appendChild(language);
document.querySelector('body').appendChild(wrapper);



const lowerCase = document.querySelectorAll('.lower');
const upperCase = document.querySelectorAll('.upper');
const caps = document.querySelectorAll('.caps');
const capsShift = document.querySelectorAll('.shift_caps');
const ru = document.querySelectorAll('.ru');
const en = document.querySelectorAll('.en');
let isEn = true;
let carriageNumber;
let beforeCarriage = '';
let afterCarriage = '';


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
            beforeCarriage += '    ';
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        } else if (event.target.classList.contains('Space')) {
            beforeCarriage += ' ';
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        }else if (event.target.classList.contains('CapsLock')) {
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
            beforeCarriage = beforeCarriage.slice(0, beforeCarriage.length - 1);
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        } else if (event.target.classList.contains('Enter')) {
            beforeCarriage += '\n';
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        } else if (event.target.classList.contains('Delete')) {
            afterCarriage = afterCarriage.slice(1, afterCarriage.length);
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        } else {
            beforeCarriage += event.target.innerText;
            outputField.value = beforeCarriage + afterCarriage;
            outputField.focus();
            outputField.selectionEnd = beforeCarriage.length;
        }
    }
})

keyboard.addEventListener('mousedown', function(event) {
    if (event.target.classList.contains('ShiftLeft') || event.target.classList.contains('ShiftRight')) {
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
    let pressedButton = document.querySelector(`.${event.code}`);

    pressedButton.classList.toggle('_active');

    if (event.code == 'Tab') {
        beforeCarriage += '    ';
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
    } else if (event.code == 'Space') {
        beforeCarriage += ' ';
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
    }else if (event.code == 'CapsLock') {
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
        beforeCarriage = beforeCarriage.slice(0, beforeCarriage.length - 1);
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
    } else if (event.code == 'Enter') {
        beforeCarriage += '\n';
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
    }else if (event.code == 'Delete') {
        afterCarriage = afterCarriage.slice(1, afterCarriage.length);
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
    } else {
        beforeCarriage += pressedButton.innerText;
        outputField.value = beforeCarriage + afterCarriage;
        outputField.focus();
        outputField.selectionEnd = beforeCarriage.length;
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

function getSettings() {
    const localStorageLanguage = localStorage.getItem('language');
    if (localStorageLanguage) {
        isEn = JSON.parse(localStorageLanguage);
        changeLanguage()
    }
}

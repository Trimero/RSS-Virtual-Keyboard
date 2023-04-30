const mainWrapper = document.createElement('div');
mainWrapper.classList.add('main-wrapper');
document.body.append(mainWrapper);

const inputTextarea = document.createElement('textarea');
inputTextarea.classList.add('input-field');
mainWrapper.append(inputTextarea);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
mainWrapper.append(keyboardContainer);

window.onload = () => { inputTextarea.focus(); }
window.onclick = () => { inputTextarea.focus() }

const keys = [
    '`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', 'CapsLock',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191', 'Shift', 'Ctrl',
    'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192'
];

const keysUpperCaseEng = [
    '~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del', 'CapsLock',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '\u2191', 'Shift', 'Ctrl',
    'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192'
];

const keysRu = [
  'ё','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
    'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del', 'CapsLock',
    'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift',
    'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '\u2191', 'Shift', 'Ctrl',
    'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192'
]

let isShiftPressed = false;
let isCapsLockPressed = false;

// функция нажатия для клавиатуры (анимация)
function keyDownUp(button, selector) {
    document.addEventListener('keydown', (e) => {
        if (e.key === button) {
            const button = document.querySelector(selector);
            button.classList.add('keyboard-button-active');
            document.addEventListener('keyup', () => {
                button.classList.remove('keyboard-button-active');
            });
        }
});
}

function pressedShift() {
    const keyboardBtns = document.querySelectorAll('.keyboard-button');
      for (let i = 0; i < keyboardBtns.length; i++) {
          keyboardBtns[i].textContent = keysUpperCaseEng[i];
      }
}

function releasedShift() {
        const keyboardBtns = document.querySelectorAll('.keyboard-button');
        for (let i = 0; i < keyboardBtns.length; i++) {
            keyboardBtns[i].textContent = keys[i];
        }
}

//сложные клавиши для клавиатуры

function hardKeys() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Shift") {
      isShiftPressed = true;
      pressedShift();
      const buttonShift = document.querySelector('.keyboard-button:nth-child(42)');
            buttonShift.classList.add('keyboard-button-active');
    }
    if (e.key === "CapsLock") {
      isCapsLockPressed = !isCapsLockPressed;
      const letterKeys = document.querySelectorAll(
        ".keyboard-button:not(.space):not(.special):not(.caps):not(.tab):not(.shift)"
      );
      let ignoregKeys = ["`", "-", "=", ",", ".", "/", ";", "'", "/", "[", "]"];
      if (isCapsLockPressed) {
        for (let i = 0; i < letterKeys.length; i++) {
          if (!isNaN(parseInt(keys[i])) || ignoregKeys.includes(keys[i])) {
            letterKeys[i].textContent = keys[i];
          } else {
            letterKeys[i].textContent = keysUpperCaseEng[i];
            const buttonCaps = document.querySelector('.keyboard-button:nth-child(29)');
            buttonCaps.classList.add('keyboard-button-active');
          }
        }
      } else {
        for (let i = 0; i < letterKeys.length; i++) {
          letterKeys[i].textContent = keys[i];
        }
        const button = document.querySelector('.keyboard-button:nth-child(29)');
        button.classList.remove('keyboard-button-active');
      }
    }
    if (e.key === "Tab") {
      e.preventDefault();
      inputTextarea.value += "    ";
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") {
      isShiftPressed = false;
      releasedShift();
      const buttonShift = document.querySelector('.keyboard-button:nth-child(42)');
            buttonShift.classList.remove('keyboard-button-active');
    }
  });
}

// создал клаву добавил кнопки события в текстарию
keys.forEach((key) => {
    const button = document.createElement("button");
    button.textContent = key;
    button.classList.add('keyboard-button');
    keyboardContainer.append(button);

//события для мыши
    button.addEventListener('click', () => {
        inputTextarea.focus();
        if (key !== 'Backspace' && key !== 'Del' && key !== 'Tab' && key !== 'CapsLock' && key !== 'Enter' && key !== 'Shift' && key !== 'Ctrl' && key !== 'Win' && key !== 'Alt' && key !== '\u2191' && key !== '\u2193' && key !== '\u2192' && key !== '\u2190') {
            inputTextarea.value += isCapsLockPressed || isShiftPressed ? key.toUpperCase() : key;
        }
        if (key === 'Backspace') {
            const startPos = inputTextarea.selectionStart;
            inputTextarea.value = inputTextarea.value.slice(0, startPos - 1) + inputTextarea.value.slice(inputTextarea.selectionStart);
            inputTextarea.setSelectionRange(startPos - 1, startPos - 1);
        }

        if (key === 'Del') {
            const startPos = inputTextarea.selectionStart;
            inputTextarea.value = inputTextarea.value.slice(0, startPos) + inputTextarea.value.slice(inputTextarea.selectionStart + 1);
            inputTextarea.setSelectionRange(startPos, startPos);
        }

        if (key === 'Tab') {
            inputTextarea.value += '    '
        }

        if (key === 'Enter') {
            const startPos = inputTextarea.selectionStart;
            inputTextarea.value = inputTextarea.value.substring(0, startPos) + '\n' + inputTextarea.value.substring(inputTextarea.selectionEnd);
        }

        if (key === "CapsLock") {
            isCapsLockPressed = !isCapsLockPressed;
            const letterKeys = document.querySelectorAll('.keyboard-button:not(.space):not(.special):not(.caps):not(.tab):not(.shift)');
            let ignoregKeys = ['`', '-', '=', ',', '.', '/', ';', "'", '/', '[', ']']
            if (isCapsLockPressed) {
                for (let i = 0; i < letterKeys.length; i++) {
                    if (!isNaN(parseInt(keys[i])) || ignoregKeys.includes(keys[i])) {
                      letterKeys[i].textContent = keys[i];
                    } else {
                    letterKeys[i].textContent = keysUpperCaseEng[i];
                    const button = document.querySelector('.keyboard-button:nth-child(29)');
                    button.classList.add('keyboard-button-active');
                }
              }
            } else {
                for (let i = 0; i < letterKeys.length; i++) {
                    letterKeys[i].textContent = keys[i];
                    const button = document.querySelector('.keyboard-button:nth-child(29)');
                    button.classList.remove('keyboard-button-active');
                }
            }
        }
        if (key === 'Shift') {
            if (isShiftPressed === false) {
                isShiftPressed = true;
                pressedShift();
                const button = document.querySelector('.keyboard-button:nth-child(42)');
                button.classList.add('keyboard-button-active');
            } else if (isShiftPressed === true) {
                releasedShift()
                isShiftPressed = false;
                const button = document.querySelector('.keyboard-button:nth-child(42)');
                button.classList.remove('keyboard-button-active');
            }
        }
    });

    inputTextarea.addEventListener("keydown", (e) => {
        if (e.key === key && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'Delete' && e.key !== 'Enter' && e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Meta' && e.key !== 'Alt') {
            e.preventDefault();
            inputTextarea.value += isCapsLockPressed ? key.toUpperCase() : key;
            button.classList.add('keyboard-button-active');
            document.addEventListener('keyup', () => {
                button.classList.remove('keyboard-button-active');
            });
        }
    });
});

    hardKeys()
    keyDownUp('Backspace', '.keyboard-button:nth-child(14)');
    keyDownUp('Tab', '.keyboard-button:nth-child(15)');
    keyDownUp('Delete','.keyboard-button:nth-child(28)');
    keyDownUp('Enter', '.keyboard-button:nth-child(41)');
    keyDownUp('Control', '.keyboard-button:nth-child(55)');
    keyDownUp('Meta', '.keyboard-button:nth-child(56)');
    keyDownUp('Alt', '.keyboard-button:nth-child(57)');
    keyDownUp('Alt', '.keyboard-button:nth-child(59)');
    keyDownUp('Control', '.keyboard-button:nth-child(60)');
    keyDownUp('ArrowUp', '.keyboard-button:nth-child(53)');
    keyDownUp('ArrowLeft', '.keyboard-button:nth-child(61)');
    keyDownUp('ArrowDown', '.keyboard-button:nth-child(62)');
    keyDownUp('ArrowRight', '.keyboard-button:nth-child(63)');
    keyDownUp('Q', '.keyboard-button:nth-child(16)');
    keyDownUp('W', '.keyboard-button:nth-child(17)');
    keyDownUp('E', '.keyboard-button:nth-child(18)');
    keyDownUp('R', '.keyboard-button:nth-child(19)');
    keyDownUp('T', '.keyboard-button:nth-child(20)');
    keyDownUp('Y', '.keyboard-button:nth-child(21)');
    keyDownUp('U', '.keyboard-button:nth-child(22)');
    keyDownUp('I', '.keyboard-button:nth-child(23)');
    keyDownUp('O', '.keyboard-button:nth-child(24)');
    keyDownUp('P', '.keyboard-button:nth-child(25)');
    keyDownUp('A', '.keyboard-button:nth-child(30)');
    keyDownUp('S', '.keyboard-button:nth-child(31)');
    keyDownUp('D', '.keyboard-button:nth-child(32)');
    keyDownUp('F', '.keyboard-button:nth-child(33)');
    keyDownUp('G', '.keyboard-button:nth-child(34)');
    keyDownUp('H', '.keyboard-button:nth-child(35)');
    keyDownUp('J', '.keyboard-button:nth-child(36)');
    keyDownUp('K', '.keyboard-button:nth-child(37)');
    keyDownUp('L', '.keyboard-button:nth-child(38)');
    keyDownUp('Z', '.keyboard-button:nth-child(43)');
    keyDownUp('X', '.keyboard-button:nth-child(44)');
    keyDownUp('C', '.keyboard-button:nth-child(45)');
    keyDownUp('V', '.keyboard-button:nth-child(46)');
    keyDownUp('B', '.keyboard-button:nth-child(47)');
    keyDownUp('N', '.keyboard-button:nth-child(48)');
    keyDownUp('M', '.keyboard-button:nth-child(49)');
    keyDownUp('~', '.keyboard-button:nth-child(1)');
    keyDownUp('!', '.keyboard-button:nth-child(2)');
    keyDownUp('@', '.keyboard-button:nth-child(3)');
    keyDownUp('#', '.keyboard-button:nth-child(4)');
    keyDownUp('$', '.keyboard-button:nth-child(5)');
    keyDownUp('%', '.keyboard-button:nth-child(6)');
    keyDownUp('^', '.keyboard-button:nth-child(7)');
    keyDownUp('&', '.keyboard-button:nth-child(8)');
    keyDownUp('*', '.keyboard-button:nth-child(9)');
    keyDownUp('(', '.keyboard-button:nth-child(10)');
    keyDownUp(')', '.keyboard-button:nth-child(11)');
    keyDownUp('_', '.keyboard-button:nth-child(12)');
    keyDownUp('+', '.keyboard-button:nth-child(13)');
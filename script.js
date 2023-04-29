const mainWrapper = document.createElement('div');
mainWrapper.classList.add('main-wrapper');
document.body.append(mainWrapper);

const inputTextarea = document.createElement('textarea');
inputTextarea.classList.add('input-field');
mainWrapper.append(inputTextarea);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
mainWrapper.append(keyboardContainer);

const keys = [
    '`','1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del', 'CapsLock',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift',
    'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\u2191', 'Shift', 'Ctrl',
    'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192'
  ];

  const keysUpperCaseEng = [
    '~','!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab',
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del', 'CapsLock',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '\u2191', 'Shift', 'Ctrl',
    'Win', 'Alt', ' ', 'Alt', 'Ctrl', '\u2190', '\u2193', '\u2192'
  ];

let isShiftPressed = false;
//функция нажатия для клавиатуры
function keyDownUp(button, selector) {
  document.addEventListener("keydown", (e) => {
    if (e.key === button) {
      const button = document.querySelector(selector);
      button.classList.add("keyboard-button-active");
      document.addEventListener("keyup", () => {
        button.classList.remove("keyboard-button-active");
      });
    } else if (e.key === "Shift") {
      isShiftPressed = true;
      const keyboardBtns = document.querySelectorAll(".keyboard-button");
      for (let i = 0; i < keyboardBtns.length; i++) {
        keyboardBtns[i].textContent = keysUpperCaseEng[i];
      }
    }
  });
  document.addEventListener("keyup", (e) => {
    if (e.key === "Shift") {
      isShiftPressed = false;
      const keyboardBtns = document.querySelectorAll(".keyboard-button");
      for (let i = 0; i < keyboardBtns.length; i++) {
        keyboardBtns[i].textContent = keys[i];
      }
    }
  });
}

  // создал клаву добавил кнопки события в текстарию
  keys.forEach((key) => {
    const button = document.createElement("button");
    button.textContent = key;
    button.classList.add("keyboard-button");
    keyboardContainer.append(button);

    button.addEventListener("click", () => {
      inputTextarea.value += key;
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === key && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'CapsLock' && e.key !== 'Delete' && e.key !== 'Enter' && e.key !== 'Shift' && e.key !== 'Control' && e.key !== 'Meta' && e.key !== 'Alt') {
        button.classList.add('keyboard-button-active');
        document.addEventListener('keyup', () => {
          button.classList.remove('keyboard-button-active');
        });
        e.preventDefault();
        inputTextarea.value += key;
      }
    });

    keyDownUp('Backspace', '.keyboard-button:nth-child(14)');
    keyDownUp('Tab', '.keyboard-button:nth-child(15)');
    keyDownUp('Delete','.keyboard-button:nth-child(28)');
    keyDownUp('CapsLock', '.keyboard-button:nth-child(29)');
    keyDownUp('Enter', '.keyboard-button:nth-child(41)');
    keyDownUp('Shift', '.keyboard-button:nth-child(42)');
    keyDownUp('Shift', '.keyboard-button:nth-child(54)');
    keyDownUp('Control', '.keyboard-button:nth-child(55)');
    keyDownUp('Meta', '.keyboard-button:nth-child(56)');
    keyDownUp('Alt', '.keyboard-button:nth-child(57)');
    keyDownUp('Alt', '.keyboard-button:nth-child(59)');
    keyDownUp('Control', '.keyboard-button:nth-child(60)');
    keyDownUp('ArrowUp', '.keyboard-button:nth-child(53)');
    keyDownUp('ArrowLeft', '.keyboard-button:nth-child(61)');
    keyDownUp('ArrowDown', '.keyboard-button:nth-child(62)');
    keyDownUp('ArrowRight', '.keyboard-button:nth-child(63)')
  });
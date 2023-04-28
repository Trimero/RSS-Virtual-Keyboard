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
    'z', 'x', 'c', 'v', 'b', 'n', 'm', '.', ',', '/', '\u2191', 'Shift', 'Control', 'Win', 'Alt', ' ', 'Alt', 'Control', '\u2190', '\u2193', '\u2192'
  ];

//функция нажатия для клавиатуры
  function keyDownUp(button, selector) {
    document.addEventListener("keydown", (e) => {
      if (e.key === button) {
        const button = document.querySelector(selector);
        button.classList.add('keyboard-button-active');
        document.addEventListener('keyup', () => {
          button.classList.remove('keyboard-button-active');
        });
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
      if (e.key === key && e.key !== 'Backspace' && e.key !== 'Tab' && e.key !== 'CapsLock') {
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
    keyDownUp('CapsLock', '.keyboard-button:nth-child(29)');
  });

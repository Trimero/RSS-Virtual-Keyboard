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
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
    'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
    'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'Enter',
    'CapsLock', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/',
    'Shift', ' ', 'Control', 'Alt', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown'
  ];

  // создал клаву добавил кнопки события в текстарию
  keys.forEach((key) => {
    const button = document.createElement("button");
    button.textContent = key;
    button.classList.add("keyboard-button");
    keyboardContainer.append(button);

    document.addEventListener("keydown", (e) => {
      if (e.key === key) {
        inputTextarea.value += key;
        button.classList.add("keyboard-button-active");
        document.addEventListener("keyup", (e) => {
          button.classList.remove("keyboard-button-active");
        });
      }
    });
    
    button.addEventListener("click", () => {
      inputTextarea.value += key;
    });
  });
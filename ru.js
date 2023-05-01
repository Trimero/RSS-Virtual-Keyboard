keysRu.forEach((key) => {
    const button = document.createElement("button");
    button.textContent = key;
    button.classList.add('keyboard-button');
    keyboardContainer.append(button);

//события для мыши
    button.addEventListener('click', () => {
        inputTextarea.focus();
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
        if (key !== 'Backspace' && key !== 'Del' && key !== 'Tab' && key !== 'CapsLock' && key !== 'Enter' && key !== 'Shift' && key !== 'Ctrl' && key !== 'Win' && key !== 'Alt' && key !== '\u2191' && key !== '\u2193' && key !== '\u2192' && key !== '\u2190') {
          console.log(key);
          if (isCapsLockPressed) {
            inputTextarea.value += key.toUpperCase();
          } else if (isShiftPressed) {
            let upperCaseValue = keysUpperCaseEng[key];
            if (upperCaseValue === undefined) {
              upperCaseValue = key.toUpperCase();
            }
            inputTextarea.value += upperCaseValue;
      } else {
            inputTextarea.value += key;
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
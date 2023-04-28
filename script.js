const mainWrapper = document.createElement('div');
mainWrapper.classList.add('main-wrapper');
document.body.append(mainWrapper);

const inputTextarea = document.createElement('textarea');
inputTextarea.classList.add('input-field');
mainWrapper.append(inputTextarea);

const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
mainWrapper.append(keyboardContainer);
import { topBoard, resultBoard, wrapper } from './screens.js';

let firstNum = '';
let secondNum = '';
let operation = '';
let result = 0;
let isPercent = false;

const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const symbolsArr = ['+/-', '%', '/', 'x', '-', '+', '='];

const allClear = () => {
  resultBoard.innerHTML = '';
  firstNum = '';
  secondNum = '';
  operation = '';
  result = 0;
};

wrapper.addEventListener('click', (e) => {
  const clickTarget = e.target.dataset.symbol;
  switch (clickTarget) {
    case 'ac':
      allClear();
      break;
    case '=':
      switch (operation) {
        case '+':
          result = +firstNum + +secondNum;
          console.log(result);
          resultBoard.innerHTML = +result;
          break;
        case '-':
          result = +firstNum - +secondNum;
          resultBoard.innerHTML = +result;
          break;
        case 'x':
          result = +firstNum * +secondNum;
          resultBoard.innerHTML = +result;
          break;
        case '/':
          result = +firstNum / +secondNum;
          resultBoard.innerHTML = +result;
          break;
      }
  }

  if (numberArr.includes(clickTarget)) {
    if (secondNum === '' && operation === '') {
      firstNum += e.target.dataset.symbol;
      resultBoard.textContent = firstNum;
    }
    if (firstNum !== '' && operation !== '') {
      secondNum += e.target.dataset.symbol;
      resultBoard.textContent = secondNum;
    }
  }
  if (symbolsArr.includes(clickTarget) && operation === '') {
    operation = clickTarget;
    resultBoard.textContent = operation;
  }
});

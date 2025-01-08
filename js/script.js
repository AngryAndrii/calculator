import { topBoard, resultBoard, wrapper } from './screens.js';

let firstNum = '';
let secondNum = '';
let operation = '';

const numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

wrapper.addEventListener('click', (e) => {
  const clickTarget = e.target.dataset.symbol;
  switch (clickTarget) {
    case 'ac':
      allClear();
      break;
  }

  if (numberArr.includes(clickTarget)) {
    firstNum += e.target.dataset.symbol;
  }
  resultBoard.innerHTML = firstNum;
  console.log(firstNum);
});

const allClear = () => {
  resultBoard.innerHTML = '';
  firstNum = '';
  secondNum = '';
  operation = '';
};

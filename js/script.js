import { topBoard, resultBoard, wrapper } from "./screens.js";

const numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const symbolsArr = ["+/-", "%", "/", "x", "-", "+", "="];

const screenObj = {
  firstNum: "",
  secondNum: "",
  operation: "",
  isPercent: false,
  result: 0,
  isFinish: false,
  isFirstDecimal: false,
  isSecondDecimal: false,
};

const render = (data) => {
  const { firstNum, operation, secondNum } = data;
  topBoard.innerHTML = `${firstNum}${operation}${secondNum}`;
  resultBoard.innerHTML = data.result;
};

const allClear = () => {
  screenObj.firstNum = "";
  screenObj.secondNum = "";
  screenObj.operation = "";
  screenObj.isPercent = false;
  screenObj.result = 0;
  screenObj.isFinish = false;
  render(screenObj);
};

wrapper.addEventListener("click", (e) => {
  let clickTarget = e.target.dataset.symbol;
  switch (clickTarget) {
    case "ac":
      allClear();
      break;
    case "=":
      switch (screenObj.operation) {
        case "+":
          screenObj.result = +screenObj.firstNum + +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
        case "-":
          screenObj.result = (
            +screenObj.firstNum - +screenObj.secondNum
          ).toFixed(3);
          render(screenObj);
          break;
        case "x":
          screenObj.result = +screenObj.firstNum * +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
        case "/":
          screenObj.result = +screenObj.firstNum / +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
      }
  }

  const calcPercents = () => {
    if (
      screenObj.firstNum !== "" &&
      screenObj.secondNum === "" &&
      screenObj.operation === ""
    ) {
      screenObj.firstNum = +screenObj.firstNum * 0.01;
      screenObj.result = +screenObj.firstNum;
      console.log(screenObj.result);
    }
    if (
      screenObj.firstNum !== "" &&
      screenObj.secondNum !== "" &&
      screenObj.operation !== ""
    ) {
      screenObj.secondNum *= 0.01;
      switch (screenObj.operation) {
        case "+":
          screenObj.result = +screenObj.firstNum + +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
        case "-":
          screenObj.result = +screenObj.firstNum - +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
        case "x":
          screenObj.result = +screenObj.firstNum * +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
        case "/":
          screenObj.result = +screenObj.firstNum / +screenObj.secondNum;
          screenObj.result.toFixed(3);
          render(screenObj);
          break;
      }
    }
    render(screenObj);
  };

  if (numberArr.includes(clickTarget)) {
    if (screenObj.secondNum === "" && screenObj.operation === "") {
      screenObj.firstNum += e.target.dataset.symbol;
      render(screenObj);
    }
    if (screenObj.firstNum !== "" && screenObj.operation !== "") {
      screenObj.secondNum += e.target.dataset.symbol;
      render(screenObj);
    }
  }
  if (
    symbolsArr.includes(clickTarget) &&
    screenObj.operation === "" &&
    clickTarget !== "%"
  ) {
    screenObj.operation = clickTarget;
    render(screenObj);
  }
  if (clickTarget === "%") {
    calcPercents();
  }
  if (clickTarget === ".") {
    if (
      screenObj.secondNum === "" &&
      screenObj.operation === "" &&
      screenObj.isFirstDecimal === false
    ) {
      screenObj.firstNum += e.target.dataset.symbol;
      render(screenObj);
      screenObj.isFirstDecimal = true;
    }
    if (
      screenObj.firstNum !== "" &&
      screenObj.operation !== "" &&
      screenObj.isSecondDecimal === false
    ) {
      screenObj.secondNum += e.target.dataset.symbol;
      render(screenObj);
      screenObj.isSecondDecimal = true;
    } else {
      return;
    }
  }
});

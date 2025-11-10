const checkbox = document.getElementById("switch");
const simpleBlock = document.getElementById("simpleBlock");
const expBlock = document.getElementById("expBlock");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    expBlock.classList.add("mode-active");
    expBlock.classList.remove("mode-hidden");

    simpleBlock.classList.add("mode-hidden");
    simpleBlock.classList.remove("mode-active");
  } else {
    simpleBlock.classList.add("mode-active");
    simpleBlock.classList.remove("mode-hidden");

    expBlock.classList.add("mode-hidden");
    expBlock.classList.remove("mode-active");
  }
});

const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");

const resultS = document.getElementById("result_simple");
const btnSimple = document.getElementById("btn_simple");
const btnExp = document.getElementById("btn_exp");
const inputExp = document.getElementById("numExp");
const resultE = document.getElementById("result_exp");

input1.addEventListener("input", () => {
  input1.value = input1.value.replace(/[^0-9.]/g, "");
});
input2.addEventListener("input", () => {
  input2.value = input2.value.replace(/[^0-9.]/g, "");
});
inputExp.addEventListener("input", () => {
  inputExp.value = inputExp.value.replace(/[^0-9+\-*\/().]/g, "");
});

function simpleSum() {
  let sum1 = "";
  if (plus.checked) {
    sum1 = input1.value + plus.value + input2.value;
  } else if (minus.checked) {
    sum1 = input1.value + minus.value + input2.value;
  } else if (multiplication.checked) {
    sum1 = input1.value + multiplication.value + input2.value;
  } else if (division.checked) {
    sum1 = input1.value + division.value + input2.value;
  } else {
    resultS.textContent = "Error: select an operation";
    return;
  }

  if (input1.value === "" || input2.value === "") {
    resultS.textContent = "Error: empty field";
    return;
  }
  let res = eval(sum1);
  if (!isFinite(res)) {
    resultS.textContent = "Error: division by 0";
    return;
  }

  resultS.textContent = parseFloat(res.toFixed(6)).toString();
}

btnSimple.addEventListener("click", simpleSum);

function expSum() {
  try {
    let resExp = eval(numExp.value);

    if (resExp === undefined) {
      resultE.textContent = "Error: empty field";
      return;
    } else if (!isFinite(resExp)) {
      resultE.textContent = "Error: division by 0";
      return;
    }

    resultE.textContent = parseFloat(resExp.toFixed(6)).toString();
  } catch (e) {
    resultE.textContent = "Error: Invalid expression";
  }
}

btnExp.addEventListener("click", expSum);

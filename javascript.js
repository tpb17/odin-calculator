function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, op) {
    switch (op) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
    }
}

let num1 = "0";
let num2= "0";
let operator;
let num1Selected = false;
let num2Selected = false;
let operatorSelected = false;


const n0 = document.querySelector("#n0");
const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
const n3 = document.querySelector("#n3");
const n4 = document.querySelector("#n4");
const n5 = document.querySelector("#n5");
const n6 = document.querySelector("#n6");
const n7 = document.querySelector("#n7");
const n8 = document.querySelector("#n8");
const n9 = document.querySelector("#n9");
const display = document.querySelector("#display");

function numSelect(btn) {
    if (!operatorSelected) {
        if (num1 === "0") {
            num1 = btn.textContent;
        } else {
            num1 += btn.textContent;
        }
        num1Selected = true;
        display.textContent = num1;
    } else {
        if (num2 === "0") {
            num2 = btn.textContent;
        } else {
            num2 == btn.textContent;
        }
        num2Selected = true;
        display.textContent = num2;
    }
}


const numBtn = document.querySelectorAll(".numBtn");
numBtn.forEach((btn) => {
    btn.addEventListener("click", () => numSelect(btn));
});

const plus = document.querySelector("#plus");
plus.addEventListener("click", () => {
    operator = "add";
    operatorSelected = true;
});
const minus = document.querySelector("#minus");
minus.addEventListener("click", () => {
    operator = "subtract";
    operatorSelected = true;
});
const times = document.querySelector("#times");
times.addEventListener("click", () => {
    operator = "multiply";
    operatorSelected = true;
});
const divby = document.querySelector("#divby");
divby.addEventListener("click", () => {
    operator = "divide";
    operatorSelected = true;
});


const eqButton = document.querySelector("#eqButton"); 
eqButton.addEventListener("click", () => {
    if (num2Selected) {
        let result = operate(parseFloat(num1), parseFloat(num2), operator);
        result = Math.round(result*1000)/1000
        display.textContent = result;

        num1Selected = false;
        num2Selected = false;
        operatorSelected = false;
        num1 = "0";
        num2 = "0";
    }
})

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
    display.textContent = "";
    num1Selected = false;
    num2Selected = false;
    operatorSelected = false;
    num1 = "0";
    num2 = "0";
})
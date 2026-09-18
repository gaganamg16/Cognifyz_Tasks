// ===============================
// 1. DYNAMIC COLOR CHANGER
// ===============================

const colorButton = document.getElementById("colorButton");

const colors = [
    "#2563eb",
    "#7c3aed",
    "#059669",
    "#dc2626",
    "#d97706"
];

let colorIndex = 0;

colorButton.addEventListener("click", function () {

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    colorButton.style.backgroundColor = colors[colorIndex];

});


// ===============================
// 2. TIME-BASED GREETING
// ===============================

const greetingButton = document.getElementById("greetingButton");
const greetingResult = document.getElementById("greetingResult");

greetingButton.addEventListener("click", function () {

    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {

        greeting = "Good morning! ☀️";

    } else if (hour < 18) {

        greeting = "Good afternoon! 🌤️";

    } else {

        greeting = "Good evening! 🌙";

    }

    greetingResult.textContent = greeting;

});


// ===============================
// 3. ADDITION CALCULATOR
// ===============================

const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", function () {

    const input1 = document.getElementById("number1");
    const input2 = document.getElementById("number2");

    const result = document.getElementById("calculatorResult");

    if (input1.value === "" || input2.value === "") {

        result.textContent = "Please enter both numbers.";

        return;
    }

    const number1 = Number(input1.value);
    const number2 = Number(input2.value);

    const sum = number1 + number2;

    result.textContent = "Result: " + sum;

});
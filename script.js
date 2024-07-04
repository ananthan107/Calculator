let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = 'Error';
  }
}

function calculateModulo() {
  try {
    display.value = eval(display.value + '%');
  } catch (e) {
    display.value = 'Error';
  }
}

function calculateSquare() {
  try {
    let result = eval(display.value);
    display.value = result * result;
  } catch (e) {
    display.value = 'Error';
  }
}
function deleteLast() {
  let displayValue = document.getElementById('display').value;
  document.getElementById('display').value = displayValue.slice(0, -1);
}

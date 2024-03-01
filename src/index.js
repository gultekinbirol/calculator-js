let number1 = Number(prompt('Enter Your First number'));
let number2 = Number(prompt('Enter your Second number'));

while (isNaN(number1) || isNaN(number2)) {
  number1 = Number(prompt('Enter Your First Number'));
  number2 = Number(prompt('Enter Your Second Number'));
}
   
let operation = prompt('Choose The Operation: +, -, *, /, ^, % (remainder)');

let result;
if (operation === '+') {
  result = number1 + number2;
} else if (operation === '-') {
  result = number1 - number2;
} else if (operation === '*') {
  result = number1 * number2;
} else if (operation === '/') {
  result = number1 / number2;
} else if (operation === '^') {
  result = Math.pow(number1, number2);
} else if (operation === '%') {
  result = number1 % number2;
} else {
  result = 'Invalid Operation!';
}

alert(`The result of your operation is: ${result}`);
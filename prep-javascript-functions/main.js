function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(2, 2));

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log(convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

console.log(getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log(getFullName('Juan', 'Ramirez'));

function cube(number) {
  // for whatever reason, eslint threw error with:
  // number ** 3
  return Math.pow(number, 3);
}

console.log(cube(5));

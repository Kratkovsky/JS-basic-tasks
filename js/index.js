// 1. Создать функцию isAdult, которая будет проверять возраст пользователя на совершеннолетие (Пусть совершеннолетним считается пользователь, которому исполнилось 18 лет):
// isAdult(20); // true
// isAdult(4); // false


const userAge = +prompt('Enter ur age');

const isAdult = function isAdult(age) {
  if (age >= 18) {
    alert('Congratulations, you can buy products in our store');
  } else {
    prompt('sorry you are underage');
  };
};

const showMe = isAdult(userAge);

// 2.  Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
// checkMultiplicity(25, 5) // true
// checkMultiplicity(15, 3) // true
// checkMultiplicity(15, 5) // true
// checkMultiplicity(15, 4) // false


const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');





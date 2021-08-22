"use strict";

/**
 * Задание 1
 */

//пример 1
// let a = 1, b = 1, c, d;
// c = ++a; //Используется инкремент, поэтому переменная "а" увеличивается до записи в переменную "с"
// alert(c); // ответ: 2 

// //пример 2
// d = b++; //Здесь тоже используется инкремент, но т.к. он записан в конце переменной, его увеличение будет после записи в переменную d
// alert(d); //ответ: 1

// //пример 3
// c = 2 + ++a; //"а" в примере 1 стала равняться 2, с помощью инкремента увеличилась до 3, дальше сумму 2 и 3 и вот переменная с = 5
// alert(c); //ответ: 5

// //пример 4
// d = 2 + b++; // "b" ранее было увеличенно на 1 поэтому равняется 2, здесь опять сначала возвращается число, а уже потом идет его увеличение на 1
// alert(d); //ответ: 4
// alert(a); //3
// alert(b); //3

/**
 * Задание 2
 */

let aExample2 = 2;
let x = 1 + (aExample2 *= 2);
// сначала переменная "a" умножается на 2 и становится равной 4, потом x приравнивается к сумме 1 + 4

/**
 * Задание 3
 */

let aExample3 = -2;
let bExample3 = 3;

if (aExample3 >=0 && bExample3 >=0) {
    console.log(aExample3 - bExample3);
} else if (aExample3 < 0 && bExample3 < 0) {
    console.log(aExample3 * bExample3);
} else if ((aExample3 < 0 && bExample3 >=0) || (aExample3 >= 0 && bExample3 <0)) {
    console.log(aExample3 + bExample3);
}


/**
 * Задание 4
 */

/**
 * Сложение чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} сумма
 */
function addition(a, b) {
    return a + b;
}

/**
 * Разность чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} разность
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Частное чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} частное
 */
function division(a, b) {
    if (b === 0) {
        return 'На ноль делить нельзя!'
    }

    return a / b;
}

/**
 * Произведение чисел
 * @param {number} a первое число
 * @param {number} b второе число
 * @returns {number} произведение
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Задание 5
 */

/**
 * Математические операции
 * @param {number} arg1 первый аргумент
 * @param {number} arg2 второй аргумент
 * @param {string} operation тип операции
 * @returns {number | string} полученное значение
 */
function mathOperation(arg1, arg2, operation) {
    let result = '';
    switch (operation) {
        case 'addition':
            result = addition(arg1, arg2)
            break;
        case 'subtraction':
            result = subtraction(arg1, arg2)
            break;
        case 'division':
            result = division(arg1, arg2)
            break;
        case 'multiplication':
            result = multiplication(arg1, arg2)
            break;
        default:
            result = `Операция '${operation}' не найдена, список возможных операций: addition, subtraction, division, multiplication`;
            break;
    }

    return result;
}

console.log(mathOperation(1, 2, 'division'));

/**
 * Задание 6
 */

/**
 * Ответ от банка
 * @param {number} money сумма 
 * @returns {string}
 */
function moneyBank(money) {
    if (isNaN(parseInt(money))) {
        return 'Введите корректное число'
    }

    let sum = money + ' ' + getNoun(parseInt(money), 'рубль', 'рубля', 'рублей');
    return `Ваша сумма в ${sum} успешно зачислена.`
}

/**
 * Функция для определения окончания
 * @param {number} number число для определения окончания
 * @param {string} one окончание для цифры 1
 * @param {string} two окончание для цифры 2
 * @param {string} five окончание для цифры 5
 * @returns {string}
 */
function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
}

console.log(moneyBank(prompt('Сколько денег хотите положить в банк?')));
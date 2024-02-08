/* Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
которые одинаково читаются и слева направо и справа налево. Например:
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке
 как и регистр! */

function checkForPalindrome(value) {
  value = value.toLowerCase().replaceAll(' ', '');
  return value === value.split('').reverse().join('');
}
console.log(checkForPalindrome('топот'));
console.log(checkForPalindrome('ДовОд'));
console.log(checkForPalindrome('Кекс'));
console.log(checkForPalindrome('Лёша на полке клопа нашёл '));

/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры
 от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

 function extractionNumber(value) {
  if (typeof value === 'string') {
    value = value.replace(/[^0-9]/g, '');
    return parseFloat(value);
  }
    return Math.abs(Number(value));
 }

extractionNumber('2023 год');
extractionNumber('ECMAScript 2022');
extractionNumber('1 кефир, 0.5 батона');
extractionNumber('агент 007');
extractionNumber('а я томат');
extractionNumber(2023);
cextractionNumber(-1);
extractionNumber(1.5); // не смог понять как удалить точку.

/* Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными
символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы
добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца. */


function determineTheValueLength(value, length, firstValue) {

  while
   (length === (firstValue + value).length) {
      return firstValue + value;
  }
  return firstValue + firstValue + firstValue + value

}

console.log(determineTheValueLength('1', 2, '0'));
console.log(determineTheValueLength('1', 4, '0'));
console.log(determineTheValueLength('q', 4, 'werty'))
console.log(determineTheValueLength('qwerty', 4, '0'))

/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает
 true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
 Примеры использования функции:
 */

 function checkingTheLength(value, number) {
  return value.length <= number;
}

console.log(checkingTheLength('проверяемая строка', 20));
console.log(checkingTheLength('проверяемая строка', 18));
console.log(checkingTheLength('проверяемая строка', 10));



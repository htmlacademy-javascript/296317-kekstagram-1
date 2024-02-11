/* Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза,
которые одинаково читаются и слева направо и справа налево. Например:
Если хотите усложнить задание, предусмотрите случай, когда в строке встречаются пробелы. Они не должны учитываться при проверке
 как и регистр! */

function checkForPalindrome(value) {
  value = value.toLowerCase().replaceAll(' ', '');
  return value === value.split('').reverse().join('');
}
checkForPalindrome('топот');


/* Функция, которая принимает строку, извлекает содержащиеся в ней цифры
 от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN: */

function extractNumber(value) {
  return Number(String(value).replace(/[^0-9]/g, ''));
}

extractNumber('2023 год');


/* Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными
символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы
добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться.
Если «добивка» слишком длинная, она обрезается с конца. */

function padStart(rawString, size, template) {
  if (rawString.length > size) {
    return rawString;
  }

  while (rawString.length <= size) {
    if (rawString.length + template.length > size) {
      return template.slice(0, Math.abs(rawString.length - size)) + rawString;
    }
    rawString = template + rawString;
  }
  return rawString;
}

padStart('1', 2, '0');


/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает
 true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы.
 Примеры использования функции:
 */

function checkingTheLength(value, number) {
  return value.length <= number;
}

checkingTheLength('проверяемая строка', 20);

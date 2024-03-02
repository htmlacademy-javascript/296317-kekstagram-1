function createObject() {
  return {
    id: randomId(),
    url: 'photos/' + randomUrl() + '.jpg',
    description: getRandomElement(DESCRIPTION),
    likes: randomLikes,
    comments: {
      id: randomCommentsItd,
      avatar: 'img/avatar-' + randomCommentsAvatar + '.svg',
      message: getRandomElement(MESSAGE),
      name: getRandomElement(NAME),
    }
  };
}

const randomId = createRandomIdFromRangeGenerator(1, 25);
const randomUrl = createRandomIdFromRangeGenerator(1, 25);
const randomLikes = getRandomInteger(15, 200);
const randomCommentsItd = getRandomInteger(1, 3);
const randomCommentsAvatar = getRandomInteger(1, 6);

const DESCRIPTION = [
  'Rhinoceros',
  'Guinea Fowl',
  'Squid',
  'Deer',
  'Dormouse'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME = [
  'Вася',
  'Петя',
  'Дима',
  'Илья',
  'Рома'
];

function getRandomElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const simiralObjects = Array.from({length: 25}, createObject);

console.log(simiralObjects);


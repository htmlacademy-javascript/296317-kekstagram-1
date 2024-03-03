function getRandomElement(elements) {
  return elements[getRandomInteger(0, elements.length - 1)];
}

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const descriptions = [
  'Rhinoceros',
  'Guinea Fowl',
  'Squid',
  'Deer',
  'Dormouse'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Вася',
  'Петя',
  'Дима',
  'Илья',
  'Рома'
];

let commentId = 1;

function createComment() {
  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomElement(messages),
    name: getRandomElement(names),
  };
}

function createOffer(_, index) {
  return {
    id: index + 1,
    url: `photos/${ index + 1 }.jpg`,
    description: getRandomElement(descriptions),
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 10) }, createComment),
  };
}

function createOffers(length) {
  return Array.from({ length }, createOffer);
}

// eslint-disable-next-line no-console
console.log(createOffers(25));

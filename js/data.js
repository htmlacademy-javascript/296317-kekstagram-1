import {getRandomElement, getRandomInteger} from './get-random.js';

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

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElement(messages),
  name: getRandomElement(names),
});

const createOffer = (_, index) => ({
  id: index + 1,
  url: `photos/${ index + 1 }.jpg`,
  description: getRandomElement(descriptions),
  likes: getRandomInteger(15, 200),
  comments: Array.from({ length: getRandomInteger(0, 10) }, createComment),
});

const createOffers = (length) => Array.from({ length }, createOffer);

export {createOffers};

import mock from './mock';
import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import s1 from '../blog-img1.jpg';
import s2 from '../blog-img1.jpg';
import s3 from '../blog-img1.jpg';
import s4 from '../blog-img1.jpg';
import s5 from '../blog-img1.jpg';
import s6 from '../blog-img1.jpg';
import s7 from '../blog-img1.jpg';
import s8 from '../blog-img1.jpg';
import s9 from '../blog-img1.jpg';
import s10 from '../blog-img1.jpg';

import user1 from '../user-1.jpg';
import user2 from '../user-1.jpg';
import user3 from '../user-1.jpg';

import user4 from '../user-1.jpg';
import user5 from '../user-1.jpg';
import user6 from '../user-1.jpg';
import { uniqueId } from 'lodash';

const chance = new Chance();

const BlogComment = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: chance.integer({ min: 1, max: 2000 }),
          avatar: user3,
          name: chance.name(),
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
      },
    ],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
];

const BlogPost = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s1,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user1,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'After Twitter Staff Cuts, Survivors Face ‘Radio Silence',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s2,
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Apple is apparently working on a new ‘streamlined’ accessibility for iOS',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s3,
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Why Figma is selling to Adobe for $20 billion',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s4,
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Streaming video way before it was cool, go dark tomorrow',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s5,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user5,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s6,
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user6,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s7,
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Social',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s8,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s9,
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: true,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s10,
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: true,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user5,
      name: chance.name(),
    },
    comments: BlogComment,
  },
];
// state: 0|1|2
const questions = [
    {
        "id": 1,
        "question": "Which planet is closest to the sun?",
        "options": ["Mars", "Venus", "Mercury", "Jupiter"],
        "answer": 2
    },
    {
        "id": 2,
        "question": "What is the capital of France?",
        "options": ["London", "Paris", "Rome", "Madrid"],
        "answer": 1

    },
    {
        "id": 3,
        "question": "Who painted the Mona Lisa?",
        "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
        "answer": 0
    },
    {
        "id": 4,
        "question": "Which animal is known as the 'King of the Jungle'?",
        "options": ["Elephant", "Tiger", "Lion", "Giraffe"],
        "answer": 2
    },
    {
        "id": 5,
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Gd", "Go"],
        "answer": 0
    },
    {
        "id": 6,
        "question": "Which country is known as the 'Land of the Rising Sun'?",
        "options": ["China", "India", "Japan", "Brazil"],
        "answer": 2
    },
    {
        "id": 7,
        "question": "What is the largest organ in the human body?",
        "options": ["Heart", "Liver", "Lung", "Skin"],
        "answer": 3
    },
    {
        "id": 8,
        "question": "Who wrote the play 'Romeo and Juliet'?",
        "options": ["William Shakespeare", "Jane Austen", "Charles Dickens", "Mark Twain"],
        "answer": 0
    },
    {
        "id": 9,
        "question": "What is the square root of 144?",
        "options": ["12", "14", "16", "18"],
        "answer": 0
    },
    {
        "id": 10,
        "question": "What is the tallest mountain in the world?",
        "options": ["Mount Everest", "Kilimanjaro", "Mount McKinley", "Mount Fuji"],
        "answer": 0
    },
    {
        "id": 11,
        "question": "Which country won the FIFA World Cup in 2018?",
        "options": ["France", "Brazil", "Germany", "Argentina"],
        "answer": 0
    },
    {
        "id": 12,
        "question": "What is the largest ocean in the world?",
        "options": ["Indian Ocean", "Arctic Ocean", "Pacific Ocean", "Atlantic Ocean"],
        "answer": 2
    },
    {
        "id": 13,
        "question": "Who discovered penicillin?",
        "options": ["Alexander Fleming", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
        "answer": 0
    },
    {
        "id": 14,
        "question": "Which instrument is used to measure atmospheric pressure?",
        "options": ["Thermometer", "Barometer", "Hydrometer", "Anemometer"],
        "answer": 1
    },
    {
        "id": 15,
        "question": "Which city is known as the 'Big Apple'?",
        "options": ["New York City", "Chicago", "Los Angeles", "Houston"],
        "answer": 0
    },
    {
        "id": 16,
        "question": "What is the chemical symbol for oxygen?",
        "options": ["Ox", "Oi", "Oxg", "O"],
        "answer": 3
    },
    {
        "id": 17,
        "question": "Who was the first person to walk on the moon?",
        "options": ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
        "answer": 1
    },
    {
        "id": 18,
        "question": "What is the capital of Japan?",
        "options": ["Beijing", "Tokyo", "Seoul", "Osaka"],
        "answer": 1
    },
    {
        "id": 19,
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Mars", "Venus", "Jupiter", "Saturn"],
        "answer": 0
    },
    {
        "id": 20,
        "question": "Who painted the ceiling of the Sistine Chapel?",
        "options": ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Michelangelo"],
        "answer": 3
    }

]
mock.onGet('/api/data/blog/BlogPosts').reply(() => {
  return [200, questions];
});
mock.onGet('/api/questions').reply(() => {
  return [200, questions];
});
// ----------------------------------------------------------------------
mock.onPost('/api/data/blog/post').reply((config) => {
  try {
    const { title } = JSON.parse(config.data);
    const paramCase = (t) =>
      t
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');

    const post = BlogPost.find((_post) => paramCase(_post.title) === title);

    if (!post) {
      return [404, { message: 'Post not found' }];
    }

    return [200, { post }];
  } catch (error) {
    console.error(error);
    return [500, { message: 'Internal server error' }];
  }
});

mock.onPost('/api/data/blog/post/add').reply((config) => {
  try {
    const { postId, comment } = JSON.parse(config.data);
    const postIndex = BlogPost.findIndex((x) => x.id === postId);
    const post = BlogPost[postIndex];
    const cComments = post.comments || [];
    post.comments = [comment, ...cComments];
    return [200, { posts: [...BlogPost] }];
  } catch (err) {
    console.error(err);
    return [500, { message: 'Internal server error' }];
  }
});

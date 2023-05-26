const { Developer } = require('../models');

const developerData = [
  {
    name: 'Dustin II',
    image: '/images/developers/profdusty.jpg',
    github_link: 'https://github.com/dustinii',
    bio: 'An experienced full-stack developer with a passion for JavaScript.',
  },
  {
    name: 'Paul',
    image: '/images/developers/profpaul.jpg',
    github_link: 'https://github.com/pk50sshowa',
    bio: 'A dedicated developer specializing in backend technologies.',
  },
  {
    name: 'Jocelyn',
    image: '/images/developers/profjoc.jpg',
    github_link: 'https://github.com/jovaldez98',
    bio: 'Front-end guru with a knack for eye-catching UI design.',
  },
  {
    name: 'Sam',
    image: '/images/developers/profsam.jpg',
    github_link: 'https://github.com/sammrey6',
    bio: 'Versatile full-stack developer with a love for problem-solving.',
  },
  {
    name: 'Brian',
    image: '/images/developers/profbrian.png',
    github_link: 'https://github.com/Brian-Autieri',
    bio: 'Back-end specialist with a focus on database efficiency.',
  },
];

const seedDevelopers = () => Developer.bulkCreate(developerData);

module.exports = seedDevelopers;
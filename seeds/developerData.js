// This file contains seed data for the developers (who, unlike the Space Monkeys, can be communicated with!) In addition to dedicated images, links to the GitHub accounts are also present.

const { Developer } = require('../models');

const developerData = [
  {
    name: 'Dustin II',
    image: '/images/developers/profdusty.jpg',
    github_link: 'https://github.com/dustinii',
    bio: 'An experienced full-stack developer with a passion for JavaScript.',
  },
  {
    name: 'Paul K',
    image: '/images/developers/profpaul.jpg',
    github_link: 'https://github.com/pk50sshowa',
    bio: 'A developer working on the back-end with a background in communications.',
  },
  {
    name: 'Jocelyn V',
    image: '/images/developers/profjoc.jpg',
    github_link: 'https://github.com/jovaldez98',
    bio: 'Front-end guru with a knack for eye-catching UI design.',
  },
  {
    name: 'Sam RBC',
    image: '/images/developers/profsam.jpg',
    github_link: 'https://github.com/sammrey6',
    bio: 'Versatile full-stack developer with a love for problem-solving.',
  },
  {
    name: 'Brian A',
    image: '/images/developers/profbrian.png',
    github_link: 'https://github.com/Brian-Autieri',
    bio: 'Back-end specialist with a focus on database efficiency.',
  },
];

const seedDevelopers = () => Developer.bulkCreate(developerData);

module.exports = seedDevelopers;
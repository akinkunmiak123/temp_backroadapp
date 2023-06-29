import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw"',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw"',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw"',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: 'ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore obcaecati aspernatur sequi ex commodi, quis accusamus illum ipsum, laborum quidem reprehenderit dolores neque aperiam culpa nulla',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2 ,
    date: 'October 1th, 2020',
    title: 'Best Of Java',
    info: 'ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore obcaecati aspernatur sequi ex commodi, quis accusamus illum ipsum, laborum quidem reprehenderit dolores neque aperiam culpa nulla',
    location: ' Indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3 ,
    date: 'September 15th, 2020',
    title: 'Explore Hong Kong',
    info: 'ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore obcaecati aspernatur sequi ex commodi, quis accusamus illum ipsum, laborum quidem reprehenderit dolores neque aperiam culpa nulla',
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4 ,
    date: 'December 5th, 2019',
    title: 'Kenya Highlights',
    info: 'ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore obcaecati aspernatur sequi ex commodi, quis accusamus illum ipsum, laborum quidem reprehenderit dolores neque aperiam culpa nulla',
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
]
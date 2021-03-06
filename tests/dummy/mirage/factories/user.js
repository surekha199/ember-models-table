import {Factory, faker} from 'ember-cli-mirage';
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const {name, random, address} = faker;

export default Factory.extend({

  index(i) {
    return i + 1;
  },

  'first-name'(i) {
    return `${name.firstName()}_${i + 1}`;
  },

  'last-name'(i) {
    return `${name.lastName()}_${i + 1}`;
  },

  age() {
    return 11 + random.number(42);
  },

  city() {
    return address.city();
  },

  country() {
    return random.arrayElement(faker.definitions.address.country.filter(c => c[0] === 'B'));
  },

  afterCreate(user, server) {
    server.createList('comment', getRandomInt(1, 3), {author: user});
  }

});

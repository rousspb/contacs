import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  text: faker.lorem.paragraph,
  createdAt: faker.date.past,
  contact(i) {
    return faker.list.cycle(1,2,3,45)(i);
  }
});

import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  text: faker.lorem.paragraph,
  date: faker.date.past,
  contact(i) {
    return faker.list.cycle(1,2,3,4,5)(i);
  }
});

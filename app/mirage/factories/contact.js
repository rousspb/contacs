import Mirage, {faker}  from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  firstName: faker.name.firstName,
  lastName: faker.name.firstName,
  jobTitle: faker.name.jobTitle,
  company(i) {
    return faker.company.companyName(`${i}`);
  },
  birthday: faker.date.past,
  picture: faker.image.avatar,
  email: faker.internet.email,
  phone: faker.phone.phoneNumber(),
  workPhone: faker.phone.phoneNumber(),
  homePhone: faker.phone.phoneNumber(),
  address: faker.address.streetAddress
});

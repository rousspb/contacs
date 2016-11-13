import DS from 'ember-data';
const { attr, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  jobTitle: attr('string'),
  company: attr('string'),
  birthday: attr(),
  picture: attr(),
  email: attr('string'),
  phone: attr('string'),
  workPhone: attr('string'),
  homePhone: attr('string'),
  address: attr('string'),
  notes: hasMany('note', { async: true})
});

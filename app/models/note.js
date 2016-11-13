import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  contact: DS.belongsTo('contact'),
  createdAt: DS.attr('date')
});

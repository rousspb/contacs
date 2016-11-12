import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cmp-header', 'Integration | Component | cmp header', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cmp-header}}`);

  assert.equal(this.$('.title-wrapper').length > 0, true, 'I can see the title-wrapper class.');
});

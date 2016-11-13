import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cmp-notes', 'Integration | Component | cmp notes', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cmp-notes}}`);

  assert.equal(this.$('div').length > 0, true, 'I can see the container');
});

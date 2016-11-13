import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cmp-notes/cmp-note', 'Integration | Component | cmp notes/cmp note', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{cmp-notes/cmp-note}}`);

  assert.equal(this.$('.note-action .remove').length > 0, true, 'I can see the container');
});

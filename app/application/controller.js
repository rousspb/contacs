import Ember from 'ember';
const { Controller, computed, observer, get, set } = Ember;
export default Controller.extend({

  isDetail: computed({
    get() {
      return true;
    }
  }),

  searching: computed({
    get() {
      return;
    }
  }),

  finding: observer('searching', function() {
    this.transitionToRoute('contacts', { queryParams: { name: get(this, 'searching')} });
  }),

  updateCurrentPath: observer('currentPath', function() {
    let currentPath = get(this, 'currentPath');
    if(currentPath === 'contacts.index') {
      set(this, 'isDetail', false);
    } else {
      set(this, 'isDetail', true);
    }
  }),

  actions: {
    add() {
      this.transitionToRoute('contacts.view', 'new');
    }
  }
});

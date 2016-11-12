import Ember from 'ember';
const { Controller, computed, get, set, isPresent } = Ember;
export default Controller.extend({
  queryParams: ['name'],
  name: null,
  sortProperties: ['firstName:asc', 'firstName:desc'],
  sortFirstName: computed.sort('model.contacts', 'sortProperties'),

  sortAsc: computed({
    get() {
      return;
    }
  }),

  filterContacts: computed('name', 'model.contacts', {
    get() {
      let contacts = get(this, 'model.contacts');
      if(isPresent(get(this, 'name'))) {
      let name = get(this, 'name');
        return contacts.filter(function(i) {
          return i.get('firstName').toLowerCase().indexOf(name.toLocaleLowerCase()) !== -1;
        });
      } else {
        return contacts;
      }
    },
    set() {
      let sortProp = get(this, 'sortAsc') ? ['firstName:desc'] : ['firstName:asc'];
      set(this, 'sortProperties', sortProp);
      this.toggleProperty('sortAsc');
      return get(this, 'sortFirstName');
    }
  }),

  actions: {
    sort() {
      set(this, 'filterContacts', true);
    }
  }
});

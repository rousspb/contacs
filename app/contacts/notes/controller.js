import Ember from 'ember';
import NoteValidations from '../../mixins/validate-note';
const { Controller, computed, get, set } = Ember;

export default Controller.extend(NoteValidations, {
  note: computed({
    get() {
      return {};
    }
  }),

  save() {
    this.validate().then(() => {
      let store = get(this, 'store');
      set(this, 'note.createdAt', new Date());
      set(this, 'note.contact', get(this, 'model.contact'));
      let note = get(this, 'note');
      set(this, 'note', store.createRecord('note', note));
      get(this, 'note').save().then((note) => {
        get(this, 'flashMessages').success('Note added.');
        set(this, 'note', {});
        set(this, 'noteErrors', {});
        this.send('refreshModel');
      }).catch(() => {
        get(this, 'flashMessages').danger('There was an error.');
      });
    }).catch((e) => {
      this.getErrors(get(this, 'errors.note'));
      console.log(e);
    });
  },

  actions: {
    add() {
      // console.log(get(this, 'contact.id'));
      this.save();
    }
  }
});

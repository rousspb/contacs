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
      get(this, 'note').save().then(() => {
        get(this, 'flashMessages').success('Note added.');
        set(this, 'note', {});
        set(this, 'noteErrors', {});
      }).catch(() => {
        get(this, 'flashMessages').danger('There was an error.');
      });
    }).catch(() => {
      this.getErrors(get(this, 'errors.note'));
    });
  },

  actions: {
    add() {
      this.save();
    },
    delete(note) {
      note.destroyRecord().then(() => {
        get(this, 'flashMessages').success('Note deleted.');
      }).catch(() => {
        get(this, 'flashMessages').danger('There was an error deleting the note.');
      });
    },
    save(note) {
      note.save().then(() => {
        get(this, 'flashMessages').success('Note updated.');
      }).catch(() => {
        get(this, 'flashMessages').danger('There was an error.');
      });
    }
  }
});

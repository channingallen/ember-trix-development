import Ember from 'ember';

export default Ember.Component.extend({
  attachmentsDisabled: false,

  editor: null,

  inputId: 'trix-editor-input-id',

  placeholder: null,

  value: null,

  _exposeEditor: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');
    this.set('editor', $trixEditor[0].editor);
  }),

  _detectTrixAttachmentAdd: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-attachment-add', (event) => {
      if (this.attrs['trix-attachment-add']) {
        this.attrs['trix-attachment-add'](event);
      }
    });

    $trixEditor.on('trix-file-accept', (event) => {
      if (this.attrs.attachmentsDisabled) {
        event.preventDefault();
      }

      if (this.attrs['trix-file-accept']) {
        this.attrs['trix-file-accept'](event);
      }
    });
  }),

  _detectTrixAttachmentRemove: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-attachment-remove', (event) => {
      if (this.attrs['trix-attachment-remove']) {
        this.attrs['trix-attachment-remove'](event);
      }
    });
  }),

  _detectTrixBlur: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-blur', (event) => {
      if (this.attrs['trix-blur']) {
        this.attrs['trix-blur'](event);
      }
    });
  }),

  _detectTrixChange: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-change', (event) => {
      if (this.attrs['trix-change']) {
        this.attrs['trix-change'](event);
      }
    });
  }),

  _detectTrixFocus_: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-focus', (event) => {
      if (this.attrs['trix-focus']) {
        this.attrs['trix-focus'](event);
      }
    });
  }),

  _detectTrixInitialize: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-initialize', (event) => {
      if (this.attrs['trix-initialize']) {
        this.attrs['trix-initialize'](event);
      }
    });
  }),

  _detectTrixSelectionChange: Ember.on('didInsertElement', function () {
    const $el = Ember.$(this.get('element'));
    const $trixEditor = $el.find('trix-editor');

    $trixEditor.on('trix-selection-change', (event) => {
      if (this.attrs['trix-selection-change']) {
        this.attrs['trix-selection-change'](event);
      }
    });
  }),

  autofocusOn: Ember.computed('attrs.autofocus', function () {
    return !!this.attrs.autofocus ? true : null;
  })
});

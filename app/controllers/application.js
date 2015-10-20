import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    handleTrixAttachmentAdd(event) {
      console.log('Handling trix-attachment-add!');
      console.log(event);

      event.originalEvent.attachment.setAttributes({
        url: 'http://media.tumblr.com/tumblr_luvwxb00u51qll9d0.jpg',
        href: 'http://media.tumblr.com/tumblr_luvwxb00u51qll9d0.jpg'
      });
    },

    handleTrixAttachmentRemove(event) {
      console.log('Handling trix-attachment-remove!');
      console.log(event);
    },

    handleTrixBlur() {
      console.log('Handling trix-blur!');
      console.log(event);
    },

    handleTrixChange() {
      console.log('Handling trix-change!');
      console.log(event);
    },

    handleTrixFileAccept() {
      console.log('Handling trix-file-accept!');
      console.log(event);
    },

    handleTrixFocus() {
      console.log('Handling trix-focus!');
      console.log(event);
    },

    handleTrixInitialize() {
      console.log('Handling trix-initialize!');
      console.log(event);
    },

    handleTrixSelectionChange() {
      console.log('Handling trix-selection-change!');
      console.log(event);
    }
  }
});

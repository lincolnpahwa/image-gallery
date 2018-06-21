import Controller from '@ember/controller';

export default Controller.extend({

  actions: {
    closeDialog() {
      this.transitionToRoute('photos');
    },

    gotoImage(identifier) {
      const imageToGoTo = this.get(`image.${identifier}`);
      if (!imageToGoTo) {
        return;
      }
      this.transitionToRoute('photos.detail', imageToGoTo);
    }
  }
});

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { next } from '@ember/runloop';

export default Controller.extend({

  imageService: service(),

  imageList: alias('imageService.imageList'),

  processing: true,

  actions: {
    closeDialog() {
      this.transitionToRoute('photos');
    },

    gotoImage(identifier) {
      const imageToGoTo = this.get(`image.${identifier}`);
      if (!imageToGoTo) {
        return;
      }
      next(this, function() {
        this.transitionToRoute('photos.detail', imageToGoTo);

      })
    },

    onSwipeChange(element) {
      const firstChild = element.firstChild;
      let { imageIndex } = firstChild.dataset;

      imageIndex = parseInt(imageIndex);

      const node = this.get('imageList').getByIndex(imageIndex);

      this.transitionToRoute('photos.detail', node);
    }
  }
});

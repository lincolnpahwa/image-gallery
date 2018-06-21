import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({

  imageService: service(),

  model() {
    return {
      images: this.get('imageService').getImages()
    };
  },

  actions: {
    imageDetailHandler(image) {
      this.transitionTo('photos.detail', image);

    }
  }
});

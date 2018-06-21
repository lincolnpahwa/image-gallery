import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { next } from '@ember/runloop';

const KEYCODE_MAP = {
  RIGHT: 39,
  LEFT: 37
}

export default Route.extend({

  imageService: service(),

  model({ image_name }) {
    const node = this.imageService.findImageNodeByValue(image_name);
    return node;
  },

  serialize(model) {
    return {
      image_name: model.value
    }
  },

  setupController(controller, model) {
    controller.set('processing', true);
    controller.set('image', model);
    controller.set('index', model.index);
    controller.set('swiperOptions', {
      initialSlide: model.index
    })

    next(this, function() {
      controller.set('processing', false);
    });
  },

  onKeyUpHandler(event) {
    const { keyCode } = event;

    if (keyCode === KEYCODE_MAP.RIGHT) {
      this.controller.send('gotoImage', 'next');
    } else if (keyCode === KEYCODE_MAP.LEFT) {
      this.controller.send('gotoImage', 'previous');
    }
  },

  actions: {

    didTransition() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      document.querySelector('body').classList.add('no-scroll');

      this.keyUpHandlerInstance = this.onKeyUpHandler.bind(this);

      //document.addEventListener('keyup', this.keyUpHandlerInstance, true);
    },

    willTransition() {
      document.querySelector('body').classList.remove('no-scroll');

      document.removeEventListener('keyup', this.keyUpHandlerInstance, true);
    }
  }
});

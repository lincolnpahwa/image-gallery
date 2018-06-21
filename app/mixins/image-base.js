import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  imageName: computed.alias('image.value'),

  imageSrc: computed('imageName', function() {
    return `/images/${this.get('imageName')}.jpg`;
  }),
});

import Component from '@ember/component';
import ImageBase from '../mixins/image-base';

export default Component.extend(ImageBase, {
	classNames: ['grid-image'],

	actions: {
		imageDetail() {
			this.sendAction('imageDetail', this.get('image'), this.get('index'));
		}
	}
});

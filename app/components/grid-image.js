import Component from '@ember/component';
import ImageBase from '../mixins/image-base';

export default Component.extend(ImageBase, {
	classNames: ['grid-image'],

	didInsertElement() {
		this._super(...arguments);

		this.element.querySelector('.grid-image-container').style.backgroundImage = `url('${this.get('imageSrc')}')`
	},

	actions: {
		imageDetail() {
			this.sendAction('imageDetail', this.get('image'), this.get('index'));
		}
	}
});

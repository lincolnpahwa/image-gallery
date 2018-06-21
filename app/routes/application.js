import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel() {
		if (this._router.url === '/') {
			this.transitionTo('photos');
		}
	}
});

import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('photos', function() {
    this.route('detail', { path: 'detail/:image_name'});
  });
});

export default Router;

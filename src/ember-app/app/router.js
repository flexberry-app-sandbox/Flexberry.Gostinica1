import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gostinica1-родитель-l');
  this.route('i-i-s-gostinica1-родитель-e',
  { path: 'i-i-s-gostinica1-родитель-e/:id' });
  this.route('i-i-s-gostinica1-родитель-e.new',
  { path: 'i-i-s-gostinica1-родитель-e/new' });
  this.route('i-i-s-gostinica1-ученик-l');
  this.route('i-i-s-gostinica1-ученик-e',
  { path: 'i-i-s-gostinica1-ученик-e/:id' });
  this.route('i-i-s-gostinica1-ученик-e.new',
  { path: 'i-i-s-gostinica1-ученик-e/new' });
});

export default Router;

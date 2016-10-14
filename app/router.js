import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('blogs', function() {
    this.route('new');
    this.route('edit', { path: '/:blog_id/edit'});
  });
});

export default Router;

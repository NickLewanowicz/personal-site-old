import Ember from 'ember';
const {get, store} = Ember;

export default Ember.Route.extend({
  model () {
    return get(this, 'store').findRecord('material', '-Kc8rJnI36SmDteBOIdt')
  }
});

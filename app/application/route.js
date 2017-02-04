import Ember from 'ember';
import RSVP from 'rsvp';
const {get, store} = Ember


export default Ember.Route.extend({
  //Populating Firebase
  // model () {
  //   var self = this
  //   Ember.$.getJSON("config.json").then(function(defaultInfo){
  //     console.log(defaultInfo)
  //     var newPost = self.store.createRecord('material', defaultInfo);
  //     newPost.save();
  //
  //     return get(self, 'store').findAll('material')
  //   })
  // }
  // model () {
  //   return get(this, 'store').findRecord('material', '-Kc8rJnI36SmDteBOIdt')
  // }
});

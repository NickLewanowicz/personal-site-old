import Ember from 'ember';
import {store, get} from 'ember-data';

export default Ember.Component.extend({
  modal1: false,
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false,
  modal6: false,
  actions: {
    open(modal){
      this.toggleProperty(modal)
    },
    close(modal){
      this.toggleProperty(modal)
    }
  }
});

import Ember from 'ember';

export default Ember.Controller.extend({
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

import DS from 'ember-data';

export default DS.Model.extend({
  basics: DS.attr(),
  work: DS.attr(),
  volunteer: DS.attr(),
  education: DS.attr(),
  awards: DS.attr(),
  publications: DS.attr(),
  skills: DS.attr(),
  languages: DS.attr(),
  interests: DS.attr(),
  references: DS.attr(),
  misc: DS.attr()
});

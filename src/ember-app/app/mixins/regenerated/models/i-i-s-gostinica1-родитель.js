import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string')
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-gostinica1-родитель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РодительE', 'i-i-s-gostinica1-родитель', {
    фИО: attr('ФИО', { index: 0 })
  });

  modelClass.defineProjection('РодительL', 'i-i-s-gostinica1-родитель', {
    фИО: attr('ФИО', { index: 0 })
  });
};

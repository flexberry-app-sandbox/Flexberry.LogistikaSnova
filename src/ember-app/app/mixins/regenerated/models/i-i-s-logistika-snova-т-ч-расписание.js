import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаПрибыт: DS.attr('date'),
  пунктПриб: DS.attr('string'),
  баржи: DS.belongsTo('i-i-s-logistika-snova-баржи', { inverse: 'тЧРасписание', async: false })
});

export let ValidationRules = {
  датаПрибыт: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-расписание.validations.датаПрибыт.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  пунктПриб: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-расписание.validations.пунктПриб.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  баржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-расписание.validations.баржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧРасписаниеE', 'i-i-s-logistika-snova-т-ч-расписание', {
    датаПрибыт: attr('Дата прибытия баржи', { index: 0 }),
    пунктПриб: attr('Пункт прибытия баржи', { index: 1 })
  });
};

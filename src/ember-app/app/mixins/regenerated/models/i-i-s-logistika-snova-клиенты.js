import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адресПоставки: DS.attr('string'),
  заказчик: DS.attr('string'),
  телефон: DS.attr('number')
});

export let ValidationRules = {
  адресПоставки: {
    descriptionKey: 'models.i-i-s-logistika-snova-клиенты.validations.адресПоставки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  заказчик: {
    descriptionKey: 'models.i-i-s-logistika-snova-клиенты.validations.заказчик.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-logistika-snova-клиенты.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентыE', 'i-i-s-logistika-snova-клиенты', {
    заказчик: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 })
  });

  modelClass.defineProjection('КлиентыL', 'i-i-s-logistika-snova-клиенты', {
    заказчик: attr('Заказчик', { index: 0 }),
    телефон: attr('Телефон', { index: 1 }),
    адресПоставки: attr('Адрес поставки', { index: 2 })
  });
};

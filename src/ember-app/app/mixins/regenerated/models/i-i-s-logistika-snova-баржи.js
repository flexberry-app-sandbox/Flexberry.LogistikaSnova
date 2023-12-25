import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  высотаБаржи: DS.attr('decimal'),
  грузопод: DS.attr('decimal'),
  длина: DS.attr('decimal'),
  номерБаржи: DS.attr('number'),
  объемБаржи: DS.attr('decimal'),
  ширина: DS.attr('decimal'),
  тЧРасписание: DS.hasMany('i-i-s-logistika-snova-т-ч-расписание', { inverse: 'баржи', async: false })
});

export let ValidationRules = {
  высотаБаржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.высотаБаржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  грузопод: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.грузопод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длина: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номерБаржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.номерБаржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объемБаржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.объемБаржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ширина: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.ширина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тЧРасписание: {
    descriptionKey: 'models.i-i-s-logistika-snova-баржи.validations.тЧРасписание.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БаржиE', 'i-i-s-logistika-snova-баржи', {
    номерБаржи: attr('Номер баржи', { index: 0 }),
    грузопод: attr('Грузоподъемность, тонн', { index: 1 }),
    длина: attr('Длина, м', { index: 2 }),
    ширина: attr('Ширина, м', { index: 3 }),
    высотаБаржи: attr('Высота баржи, м', { index: 4 }),
    объемБаржи: attr('Объем баржи, м^3', { index: 5 }),
    тЧРасписание: hasMany('i-i-s-logistika-snova-т-ч-расписание', 'Расписание барж', {
      датаПрибыт: attr('Дата прибытия баржи', { index: 0 }),
      пунктПриб: attr('Пункт прибытия баржи', { index: 1 })
    })
  });

  modelClass.defineProjection('БаржиL', 'i-i-s-logistika-snova-баржи', {
    номерБаржи: attr('Номер баржи', { index: 0 }),
    грузопод: attr('Грузоподъемность, тонн', { index: 1 }),
    длина: attr('Длина, м', { index: 2 }),
    ширина: attr('Ширина, м', { index: 3 }),
    высотаБаржи: attr('Высота баржи, м', { index: 4 }),
    объемБаржи: attr('Объем баржи, м^3', { index: 5 })
  });
};

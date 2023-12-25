import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  высота: DS.attr('decimal'),
  длина: DS.attr('decimal'),
  максВес: DS.attr('decimal'),
  наимКонтей: DS.attr('string'),
  номерКонтей: DS.attr('number'),
  объем: DS.attr('decimal'),
  ширина: DS.attr('decimal')
});

export let ValidationRules = {
  высота: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.высота.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  длина: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.длина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  максВес: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.максВес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  наимКонтей: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.наимКонтей.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерКонтей: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.номерКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объем: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.объем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ширина: {
    descriptionKey: 'models.i-i-s-logistika-snova-контейнеры.validations.ширина.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтейнерыE', 'i-i-s-logistika-snova-контейнеры', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 }),
    длина: attr('Длина, м', { index: 2 }),
    ширина: attr('Ширина, м', { index: 3 }),
    высота: attr('Высота, м', { index: 4 }),
    объем: attr('Объем, м^3', { index: 5 }),
    максВес: attr('Максимальный вес, кг', { index: 6 })
  });

  modelClass.defineProjection('КонтейнерыL', 'i-i-s-logistika-snova-контейнеры', {
    номерКонтей: attr('Номер контейнера', { index: 0 }),
    наимКонтей: attr('Наименование контейнера', { index: 1 }),
    длина: attr('Длина, м', { index: 2 }),
    ширина: attr('Ширина, м', { index: 3 }),
    высота: attr('Высота, м', { index: 4 }),
    объем: attr('Объем, м^3', { index: 5 }),
    максВес: attr('Максимальный вес, кг', { index: 6 })
  });
};

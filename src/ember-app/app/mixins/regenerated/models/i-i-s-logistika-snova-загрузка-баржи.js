import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номерДокЗБ: DS.attr('number'),
  объемБарСв: DS.attr('decimal'),
  остатокПоВесу: DS.attr('decimal'),
  баржи: DS.belongsTo('i-i-s-logistika-snova-баржи', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika-snova-сотрудники', { inverse: null, async: false }),
  тЧИнфОКонт: DS.hasMany('i-i-s-logistika-snova-т-ч-инф-о-конт', { inverse: 'загрузкаБаржи', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокЗБ: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.номерДокЗБ.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объемБарСв: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.объемБарСв.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  остатокПоВесу: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.остатокПоВесу.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  баржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.баржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОКонт: {
    descriptionKey: 'models.i-i-s-logistika-snova-загрузка-баржи.validations.тЧИнфОКонт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗагрузкаБаржиE', 'i-i-s-logistika-snova-загрузка-баржи', {
    дата: attr('Дата загрузки баржи', { index: 0 }),
    номерДокЗБ: attr('Номер документа загрузки баржи', { index: 1 }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИОСотруд' }),
    баржи: belongsTo('i-i-s-logistika-snova-баржи', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 5, hidden: true }),
      объемБаржи: attr('Объем баржи', { index: 6 }),
      грузопод: attr('Грузоподъемность баржи', { index: 8 })
    }, { index: 4, displayMemberPath: 'номерБаржи' }),
    объемБарСв: attr('Свободный объем баржи', { index: 7 }),
    остатокПоВесу: attr('Остаток по весу баржи', { index: 9 }),
    тЧИнфОКонт: hasMany('i-i-s-logistika-snova-т-ч-инф-о-конт', 'Информация о погруженных контейнерах', {
      загрузКонтейн: belongsTo('i-i-s-logistika-snova-загруз-контейн', 'Номер документа загрузки контейнеров', {
        номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1, hidden: true }),
        контейнеры: belongsTo('i-i-s-logistika-snova-контейнеры', '', {
          номерКонтей: attr('Номер контейнера', { index: 2 }),
          объем: attr('Объем контейнера', { index: 3 }),
          максВес: attr('Максимальный вес контейнера', { index: 4 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номерДокЗагк' }),
      докумПостав: belongsTo('i-i-s-logistika-snova-докум-постав', 'Номер документа поставки', {
        номДокПостав: attr('Номер документа поставки', { index: 6, hidden: true }),
        клиенты: belongsTo('i-i-s-logistika-snova-клиенты', '', {
          адресПоставки: attr('Адрес поставки', { index: 7 })
        }, { index: -1, hidden: true })
      }, { index: 5, displayMemberPath: 'номДокПостав' })
    })
  });

  modelClass.defineProjection('ЗагрузкаБаржиL', 'i-i-s-logistika-snova-загрузка-баржи', {
    дата: attr('Дата загрузки баржи', { index: 0 }),
    номерДокЗБ: attr('Номер документа загрузки баржи', { index: 1 }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 2 })
    }, { index: -1, hidden: true }),
    баржи: belongsTo('i-i-s-logistika-snova-баржи', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 3 }),
      объемБаржи: attr('Объем баржи, м^3', { index: 4 }),
      грузопод: attr('Грузоподбъемность баржи, тонн', { index: 6 })
    }, { index: -1, hidden: true }),
    объемБарСв: attr('Свободный объем баржи, м^3', { index: 5 }),
    остатокПоВесу: attr('Остаток по весу баржи, тонн', { index: 7 })
  });
};

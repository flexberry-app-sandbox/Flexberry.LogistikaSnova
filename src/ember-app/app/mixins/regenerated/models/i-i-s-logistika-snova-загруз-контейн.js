import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокЗагк: DS.attr('number'),
  объемСвобод: DS.attr('decimal'),
  остатокПоВесу: DS.attr('decimal'),
  контейнеры: DS.belongsTo('i-i-s-logistika-snova-контейнеры', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika-snova-сотрудники', { inverse: null, async: false }),
  тЧИнфОГрузе: DS.hasMany('i-i-s-logistika-snova-т-ч-инф-о-грузе', { inverse: 'загрузКонтейн', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокЗагк: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.номерДокЗагк.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  объемСвобод: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.объемСвобод.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  остатокПоВесу: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.остатокПоВесу.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  контейнеры: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.контейнеры.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОГрузе: {
    descriptionKey: 'models.i-i-s-logistika-snova-загруз-контейн.validations.тЧИнфОГрузе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗагрузКонтейнE', 'i-i-s-logistika-snova-загруз-контейн', {
    дата: attr('Дата загрузки контейнеров', { index: 0 }),
    номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1 }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИОСотруд' }),
    контейнеры: belongsTo('i-i-s-logistika-snova-контейнеры', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 5, hidden: true }),
      объем: attr('Объем контейнера, м^3', { index: 6 }),
      максВес: attr('Максимальный вес контейнера, кг', { index: 8 })
    }, { index: 4, displayMemberPath: 'номерКонтей' }),
    объемСвобод: attr('Свободный объем контейнера, м^3', { index: 7 }),
    остатокПоВесу: attr('Остаток по весу контейнера, кг', { index: 9 }),
    тЧИнфОГрузе: hasMany('i-i-s-logistika-snova-т-ч-инф-о-грузе', 'Информация о грузе', {
      груз: belongsTo('i-i-s-logistika-snova-груз', 'Код груза', {
        кодГруза: attr('Код груза', { index: 1, hidden: true }),
        категорияГр: attr('Категория груза', { index: 2 }),
        объем: attr('Объем груза', { index: 3 }),
        масса: attr('Масса груза', { index: 4 })
      }, { index: 0, displayMemberPath: 'кодГруза' })
    })
  });

  modelClass.defineProjection('ЗагрузКонтейнL', 'i-i-s-logistika-snova-загруз-контейн', {
    дата: attr('Дата загрузки контейнеров', { index: 0 }),
    номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1 }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 2 })
    }, { index: -1, hidden: true }),
    контейнеры: belongsTo('i-i-s-logistika-snova-контейнеры', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 3 }),
      объем: attr('Объем контейнера, м^3', { index: 4 }),
      максВес: attr('Максимальный вес, кг', { index: 6 })
    }, { index: -1, hidden: true }),
    объемСвобод: attr('Свободный объем контейнера, м^3', { index: 5 }),
    остатокПоВесу: attr('Остаток по весу контейнера, кг', { index: 7 })
  });
};

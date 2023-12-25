import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  докумПостав: DS.belongsTo('i-i-s-logistika-snova-докум-постав', { inverse: null, async: false }),
  загрузКонтейн: DS.belongsTo('i-i-s-logistika-snova-загруз-контейн', { inverse: null, async: false }),
  загрузкаБаржи: DS.belongsTo('i-i-s-logistika-snova-загрузка-баржи', { inverse: 'тЧИнфОКонт', async: false })
});

export let ValidationRules = {
  докумПостав: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-инф-о-конт.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрузКонтейн: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-инф-о-конт.validations.загрузКонтейн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрузкаБаржи: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-инф-о-конт.validations.загрузкаБаржи.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИнфОКонтE', 'i-i-s-logistika-snova-т-ч-инф-о-конт', {
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
  });
};

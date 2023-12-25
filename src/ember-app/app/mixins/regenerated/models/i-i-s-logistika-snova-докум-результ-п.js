import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  датаПриб: DS.attr('date'),
  докумПостав: DS.belongsTo('i-i-s-logistika-snova-докум-постав', { inverse: null, async: false }),
  тЧДостКонт: DS.hasMany('i-i-s-logistika-snova-т-ч-дост-кон', { inverse: 'докумРезультП', async: false }),
  тЧСвобМест: DS.hasMany('i-i-s-logistika-snova-т-ч-своб-мест', { inverse: 'докумРезультП', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-результ-п.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаПриб: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-результ-п.validations.датаПриб.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-результ-п.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧДостКонт: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-результ-п.validations.тЧДостКонт.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
  тЧСвобМест: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-результ-п.validations.тЧСвобМест.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумРезультПE', 'i-i-s-logistika-snova-докум-результ-п', {
    дата: attr('Дата документа результатов поставки', { index: 0 }),
    датаПриб: attr('Дата прибытия', { index: 1 }),
    докумПостав: belongsTo('i-i-s-logistika-snova-докум-постав', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа поставки', { index: 3, hidden: true }),
      клиенты: belongsTo('i-i-s-logistika-snova-клиенты', '', {
        заказчик: attr('Наименование заказчика', { index: 4 }),
        адресПоставки: attr('Адрес поставки', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'номДокПостав' }),
    тЧДостКонт: hasMany('i-i-s-logistika-snova-т-ч-дост-кон', 'Доставленные контейнеры', {
      загрузКонтейн: belongsTo('i-i-s-logistika-snova-загруз-контейн', 'Номер документа загрузки контейнеров', {
        номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'номерДокЗагк' }),
      груз: belongsTo('i-i-s-logistika-snova-груз', 'Код груза', {
        кодГруза: attr('Код груза', { index: 3, hidden: true }),
        категорияГр: attr('Категория поставленного груза ', { index: 4 }),
        объем: attr('Объем поставленного груза', { index: 5 })
      }, { index: 2, displayMemberPath: 'кодГруза' })
    }),
    тЧСвобМест: hasMany('i-i-s-logistika-snova-т-ч-своб-мест', 'Свободное место в контейнерах', {
      загрузКонтейн: belongsTo('i-i-s-logistika-snova-загруз-контейн', 'Номер документа загрузки контейнеров', {
        номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1, hidden: true }),
        контейнеры: belongsTo('i-i-s-logistika-snova-контейнеры', '', {
          номерКонтей: attr('Номер контейнера', { index: 2 }),
          объем: attr('Объем контейнера', { index: 3 })
        }, { index: -1, hidden: true })
      }, { index: 0, displayMemberPath: 'номерДокЗагк' }),
      свобОбъем: attr('Освободившийся объем', { index: 4 })
    })
  });

  modelClass.defineProjection('ДокумРезультПL', 'i-i-s-logistika-snova-докум-результ-п', {
    дата: attr('Дата документа результатов поставки', { index: 0 }),
    датаПриб: attr('Дата прибытия', { index: 1 }),
    докумПостав: belongsTo('i-i-s-logistika-snova-докум-постав', 'Номер документа поставки', {
      номДокПостав: attr('Номер документа поставки', { index: 2 }),
      клиенты: belongsTo('i-i-s-logistika-snova-клиенты', '', {
        заказчик: attr('Наименование заказчика', { index: 3 }),
        адресПоставки: attr('Адрес поставки', { index: 4 })
      }, { index: -1, hidden: true })
    }, { index: -1, hidden: true })
  });
};

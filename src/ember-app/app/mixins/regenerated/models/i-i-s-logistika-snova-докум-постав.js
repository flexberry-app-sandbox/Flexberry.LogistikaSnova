import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date', { defaultValue() { return new Date(); } }),
  номДокПостав: DS.attr('number'),
  срокПоставки: DS.attr('date'),
  клиенты: DS.belongsTo('i-i-s-logistika-snova-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-logistika-snova-организация', { inverse: null, async: false }),
  сотрудники: DS.belongsTo('i-i-s-logistika-snova-сотрудники', { inverse: null, async: false }),
  тЧИнфОЗак: DS.hasMany('i-i-s-logistika-snova-т-ч-инф-о-зак', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номДокПостав: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.номДокПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  срокПоставки: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.срокПоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудники: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.сотрудники.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  тЧИнфОЗак: {
    descriptionKey: 'models.i-i-s-logistika-snova-докум-постав.validations.тЧИнфОЗак.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-logistika-snova-докум-постав', {
    дата: attr('Дата документа поставки', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-logistika-snova-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наимОрганиз' }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фИОСотруд' }),
    клиенты: belongsTo('i-i-s-logistika-snova-клиенты', 'Наименование заказчика', {
      заказчик: attr('Наименование заказчика', { index: 7, hidden: true }),
      адресПоставки: attr('Адрес поставки', { index: 8 })
    }, { index: 6, displayMemberPath: 'заказчик' }),
    срокПоставки: attr('Срок поставки', { index: 9 }),
    тЧИнфОЗак: hasMany('i-i-s-logistika-snova-т-ч-инф-о-зак', 'Информация о заказе', {
      груз: belongsTo('i-i-s-logistika-snova-груз', 'Код груза', {
        кодГруза: attr('Код груза', { index: 1, hidden: true }),
        категорияГр: attr('Категория груза', { index: 2 }),
        масса: attr('Масса груза', { index: 3 }),
        объем: attr('Объем груза', { index: 4 })
      }, { index: 0, displayMemberPath: 'кодГруза' }),
      количество: attr('Количество груза', { index: 5 })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-logistika-snova-докум-постав', {
    дата: attr('Дата документа поставки', { index: 0 }),
    номДокПостав: attr('Номер документа поставки', { index: 1 }),
    организация: belongsTo('i-i-s-logistika-snova-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 2 })
    }, { index: -1, hidden: true }),
    сотрудники: belongsTo('i-i-s-logistika-snova-сотрудники', 'Ответственный', {
      фИОСотруд: attr('Ответственный', { index: 3 })
    }, { index: -1, hidden: true }),
    клиенты: belongsTo('i-i-s-logistika-snova-клиенты', 'Наименование заказчика', {
      заказчик: attr('Наименование заказчика', { index: 4 }),
      адресПоставки: attr('Адрес поставки', { index: 5 })
    }, { index: -1, hidden: true }),
    срокПоставки: attr('Срок поставки', { index: 6 })
  });
};

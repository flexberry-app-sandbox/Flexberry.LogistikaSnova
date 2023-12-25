import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  груз: DS.belongsTo('i-i-s-logistika-snova-груз', { inverse: null, async: false }),
  загрузКонтейн: DS.belongsTo('i-i-s-logistika-snova-загруз-контейн', { inverse: null, async: false }),
  докумРезультП: DS.belongsTo('i-i-s-logistika-snova-докум-результ-п', { inverse: 'тЧДостКонт', async: false })
});

export let ValidationRules = {
  груз: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-дост-кон.validations.груз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрузКонтейн: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-дост-кон.validations.загрузКонтейн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумРезультП: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-дост-кон.validations.докумРезультП.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧДостКонE', 'i-i-s-logistika-snova-т-ч-дост-кон', {
    загрузКонтейн: belongsTo('i-i-s-logistika-snova-загруз-контейн', 'Номер документа загрузки контейнеров', {
      номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номерДокЗагк' }),
    груз: belongsTo('i-i-s-logistika-snova-груз', 'Код груза', {
      кодГруза: attr('Код груза', { index: 3, hidden: true }),
      категорияГр: attr('Категория поставленного груза ', { index: 4 }),
      объем: attr('Объем поставленного груза', { index: 5 })
    }, { index: 2, displayMemberPath: 'кодГруза' })
  });
};

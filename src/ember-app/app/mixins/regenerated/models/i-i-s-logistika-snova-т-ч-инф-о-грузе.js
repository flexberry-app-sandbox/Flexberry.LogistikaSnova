import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  груз: DS.belongsTo('i-i-s-logistika-snova-груз', { inverse: null, async: false }),
  загрузКонтейн: DS.belongsTo('i-i-s-logistika-snova-загруз-контейн', { inverse: 'тЧИнфОГрузе', async: false })
});

export let ValidationRules = {
  груз: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-инф-о-грузе.validations.груз.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  загрузКонтейн: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-инф-о-грузе.validations.загрузКонтейн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧИнфОГрузеE', 'i-i-s-logistika-snova-т-ч-инф-о-грузе', {
    груз: belongsTo('i-i-s-logistika-snova-груз', 'Код груза', {
      кодГруза: attr('Код груза', { index: 1, hidden: true }),
      категорияГр: attr('Категория груза', { index: 2 }),
      объем: attr('Объем груза', { index: 3 }),
      масса: attr('Масса груза', { index: 4 })
    }, { index: 0, displayMemberPath: 'кодГруза' })
  });
};

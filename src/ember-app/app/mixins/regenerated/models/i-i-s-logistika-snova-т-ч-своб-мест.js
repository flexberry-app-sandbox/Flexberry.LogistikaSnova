import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  свобОбъем: DS.attr('decimal'),
  загрузКонтейн: DS.belongsTo('i-i-s-logistika-snova-загруз-контейн', { inverse: null, async: false }),
  докумРезультП: DS.belongsTo('i-i-s-logistika-snova-докум-результ-п', { inverse: 'тЧСвобМест', async: false })
});

export let ValidationRules = {
  свобОбъем: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-своб-мест.validations.свобОбъем.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  загрузКонтейн: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-своб-мест.validations.загрузКонтейн.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  докумРезультП: {
    descriptionKey: 'models.i-i-s-logistika-snova-т-ч-своб-мест.validations.докумРезультП.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТЧСвобМестE', 'i-i-s-logistika-snova-т-ч-своб-мест', {
    загрузКонтейн: belongsTo('i-i-s-logistika-snova-загруз-контейн', 'Номер документа загрузки контейнеров', {
      номерДокЗагк: attr('Номер документа загрузки контейнеров', { index: 1, hidden: true }),
      контейнеры: belongsTo('i-i-s-logistika-snova-контейнеры', '', {
        номерКонтей: attr('Номер контейнера', { index: 2 }),
        объем: attr('Объем контейнера', { index: 3 })
      }, { index: -1, hidden: true })
    }, { index: 0, displayMemberPath: 'номерДокЗагк' }),
    свобОбъем: attr('Освободившийся объем', { index: 4 })
  });
};

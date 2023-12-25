import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЗагрузкаБаржиMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-загрузка-баржи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЗагрузкаБаржиMixin, Validations, {
});

defineProjections(Model);

export default Model;

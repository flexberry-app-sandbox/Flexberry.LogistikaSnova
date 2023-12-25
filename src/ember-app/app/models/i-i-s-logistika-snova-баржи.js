import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as БаржиMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-баржи';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(БаржиMixin, Validations, {
});

defineProjections(Model);

export default Model;

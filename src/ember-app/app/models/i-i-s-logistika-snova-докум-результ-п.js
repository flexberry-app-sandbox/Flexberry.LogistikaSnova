import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ДокумРезультПMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-докум-результ-п';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДокумРезультПMixin, Validations, {
});

defineProjections(Model);

export default Model;

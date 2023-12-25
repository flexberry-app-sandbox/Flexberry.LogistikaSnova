import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧДостКонMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-дост-кон';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧДостКонMixin, Validations, {
});

defineProjections(Model);

export default Model;

import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ТЧИнфОКонтMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-инф-о-конт';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ТЧИнфОКонтMixin, Validations, {
});

defineProjections(Model);

export default Model;

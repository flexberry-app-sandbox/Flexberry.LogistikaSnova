import {
  defineNamespace,
  defineProjections,
  Model as ГрузMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-груз';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрузMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

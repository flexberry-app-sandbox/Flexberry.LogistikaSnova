import {
  defineNamespace,
  defineProjections,
  Model as БаржиMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-баржи';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БаржиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

import {
  defineNamespace,
  defineProjections,
  Model as КонтейнерыMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-контейнеры';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КонтейнерыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

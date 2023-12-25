import {
  defineNamespace,
  defineProjections,
  Model as ТЧДостКонMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-дост-кон';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧДостКонMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

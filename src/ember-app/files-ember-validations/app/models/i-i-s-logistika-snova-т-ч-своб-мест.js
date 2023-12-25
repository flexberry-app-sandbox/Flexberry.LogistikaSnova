import {
  defineNamespace,
  defineProjections,
  Model as ТЧСвобМестMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-своб-мест';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧСвобМестMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

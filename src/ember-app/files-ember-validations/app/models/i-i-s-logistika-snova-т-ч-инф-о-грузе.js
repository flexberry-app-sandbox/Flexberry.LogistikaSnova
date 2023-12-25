import {
  defineNamespace,
  defineProjections,
  Model as ТЧИнфОГрузеMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-инф-о-грузе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧИнфОГрузеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

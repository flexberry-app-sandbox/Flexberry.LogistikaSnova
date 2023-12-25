import {
  defineNamespace,
  defineProjections,
  Model as ТЧРасписаниеMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-т-ч-расписание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТЧРасписаниеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

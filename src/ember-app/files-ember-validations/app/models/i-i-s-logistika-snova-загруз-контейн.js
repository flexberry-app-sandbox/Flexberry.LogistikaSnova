import {
  defineNamespace,
  defineProjections,
  Model as ЗагрузКонтейнMixin
} from '../mixins/regenerated/models/i-i-s-logistika-snova-загруз-контейн';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗагрузКонтейнMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

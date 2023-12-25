import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-logistika-snova-загрузка-баржи-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-logistika-snova-т-ч-инф-о-конт+загрузКонтейн':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номерДокЗагк',
            required: true,
            relationName: 'загрузКонтейн',
            projection: 'ЗагрузКонтейнL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-logistika-snova-т-ч-инф-о-конт+докумПостав':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'номДокПостав',
            required: true,
            relationName: 'докумПостав',
            projection: 'ДокумПоставL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});

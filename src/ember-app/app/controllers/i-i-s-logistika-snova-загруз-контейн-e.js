import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-logistika-snova-загруз-контейн-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-logistika-snova-т-ч-инф-о-грузе+груз':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодГруза',
            required: true,
            relationName: 'груз',
            projection: 'ГрузL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
